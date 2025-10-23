
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageSelector } from './components/ImageSelector';
import { PromptInput } from './components/PromptInput';
import { GenerateButton } from './components/GenerateButton';
import { ResultDisplay } from './components/ResultDisplay';
import { Loader } from './components/Loader';
import { WelcomeMessage } from './components/WelcomeMessage';
import { ErrorDisplay } from './components/ErrorDisplay';
import type { ImageState } from './types';
import { fileToBase64 } from './utils/fileUtils';
import { editImageWithGemini } from './services/geminiService';

export default function App(): React.ReactElement {
  const [originalImage, setOriginalImage] = useState<ImageState | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = useCallback(async (file: File) => {
    setError(null);
    setEditedImage(null);
    try {
      const base64 = await fileToBase64(file);
      setOriginalImage({ file, base64 });
    } catch (err) {
      setError('Failed to read the selected image. Please try another one.');
      setOriginalImage(null);
    }
  }, []);

  const handleGenerateClick = useCallback(async () => {
    if (!originalImage || !prompt) {
      setError('Please select an image and enter a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const newImageBase64 = await editImageWithGemini(
        originalImage.base64,
        originalImage.file.type,
        prompt
      );
      setEditedImage(newImageBase64);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate image: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, prompt]);

  const handleReset = useCallback(() => {
    setOriginalImage(null);
    setEditedImage(null);
    setPrompt('');
    setError(null);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Header />
      <main className="w-full max-w-4xl p-4 md:p-8 flex-grow">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 space-y-6">
          <ImageSelector onImageSelect={handleImageSelect} originalImage={originalImage?.base64} />
          
          {originalImage && (
            <>
              <PromptInput prompt={prompt} setPrompt={setPrompt} disabled={isLoading} />
              <div className="flex justify-center">
                 <GenerateButton onClick={handleGenerateClick} disabled={isLoading || !prompt} />
              </div>
            </>
          )}

          {isLoading && <Loader />}
          {error && <ErrorDisplay message={error} />}

          {!isLoading && editedImage && originalImage && (
            <ResultDisplay 
              originalImage={originalImage.base64} 
              editedImage={editedImage}
              onReset={handleReset}
            />
          )}

          {!originalImage && !isLoading && !error && <WelcomeMessage />}
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>AI Photo Editor &copy; 2024</p>
      </footer>
    </div>
  );
}
