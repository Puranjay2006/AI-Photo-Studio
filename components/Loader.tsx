
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-cyan-300 font-medium">AI is working its magic...</p>
    </div>
  );
};
