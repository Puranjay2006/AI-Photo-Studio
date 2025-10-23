
import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  disabled: boolean;
}

export const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, disabled }) => {
  return (
    <div>
      <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
        Describe your edit
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={disabled}
        placeholder="e.g., 'Add a superhero cape to the person' or 'Change the background to a futuristic city'"
        rows={3}
        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-300 disabled:opacity-50"
      />
    </div>
  );
};
