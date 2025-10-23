
import React, { useRef } from 'react';

interface ImageSelectorProps {
  onImageSelect: (file: File) => void;
  originalImage: string | undefined;
}

export const ImageSelector: React.FC<ImageSelectorProps> = ({ onImageSelect, originalImage }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className="w-full h-64 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center cursor-pointer hover:border-cyan-400 hover:bg-gray-700 transition-colors duration-300"
      onClick={handleContainerClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      {originalImage ? (
        <img src={`data:image/jpeg;base64,${originalImage}`} alt="Selected" className="max-h-full max-w-full object-contain rounded-lg" />
      ) : (
        <div className="text-center text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="mt-2 font-medium">Click to upload a photo</p>
          <p className="text-xs">PNG, JPG, WEBP up to 10MB</p>
        </div>
      )}
    </div>
  );
};
