
import React from 'react';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center px-8 py-3 bg-cyan-500 text-white font-bold rounded-full shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      Generate
    </button>
  );
};
