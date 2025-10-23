
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-800 shadow-lg sticky top-0 z-10">
      <div className="max-w-4xl mx-auto p-4 flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.33 13.33c-1.853 1.853-4.877 1.853-6.73 0-1.853-1.853-1.853-4.877 0-6.73.927-.927 2.143-1.39 3.365-1.39s2.438.463 3.365 1.39c1.853 1.853 1.853 4.877 0 6.73zm-1.02-5.71c-.585-.585-1.535-.585-2.12 0-.585.585-.585 1.535 0 2.12.585.585 1.535.585 2.12 0 .585-.585.585-1.535 0-2.12zM12 4.5c4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5S7.864 4.5 12 4.5z"/>
        </svg>
        <h1 className="text-xl font-bold text-white tracking-wider">AI Photo Editor</h1>
      </div>
    </header>
  );
};
