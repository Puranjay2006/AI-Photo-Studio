
import React from 'react';

interface ResultDisplayProps {
  originalImage: string;
  editedImage: string;
  onReset: () => void;
}

const ImageCard: React.FC<{ title: string; imageSrc: string }> = ({ title, imageSrc }) => (
  <div className="flex flex-col items-center">
    <h3 className="text-lg font-semibold text-gray-300 mb-2">{title}</h3>
    <div className="w-full aspect-square bg-gray-700 rounded-xl overflow-hidden shadow-lg">
      <img src={`data:image/jpeg;base64,${imageSrc}`} alt={title} className="w-full h-full object-contain" />
    </div>
  </div>
);

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ originalImage, editedImage, onReset }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center text-white mb-6">Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ImageCard title="Original" imageSrc={originalImage} />
        <ImageCard title="Edited with AI" imageSrc={editedImage} />
      </div>
      <div className="text-center mt-8">
         <button
            onClick={onReset}
            className="px-6 py-2 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
          >
            Start Over
          </button>
      </div>
    </div>
  );
};
