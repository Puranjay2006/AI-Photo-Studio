
import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function editImageWithGemini(
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const imagePart = response.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData
    );

    if (imagePart && imagePart.inlineData) {
      return imagePart.inlineData.data;
    } else {
      throw new Error("No image was generated in the API response.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if(error instanceof Error && error.message.includes('429')) {
      throw new Error("API rate limit exceeded. Please try again later.");
    }
    throw new Error("Failed to communicate with the AI model.");
  }
}
