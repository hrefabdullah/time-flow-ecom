import React from 'react';
import { useSelector } from 'react-redux';

const Quote = () => {
  const isDark = useSelector((state) => state.darkMode);

  return (
    <div
      className={`w-full h-[18vh] md:h-[38vh] flex items-center justify-center px-6 md:px-16 border-b transition-colors duration-300`}
    >
      <div className="flex flex-col items-start max-w-2xl">
        <h1
          className={`text-start text-sm md:text-2xl italic border-l-4 pl-4 transition-colors duration-300 ${
            isDark
              ? 'text-gray-100 border-blue-400'
              : 'text-[#101019] border-[#101019]'
          }`}
        >
          "Time is what we want most, but what we use worst."
        </h1>
        <p
          className={`mt-2 ml-1 text-xs md:text-lg font-medium transition-colors duration-300 ${
            isDark ? 'text-blue-400' : 'text-blue-700'
          }`}
        >
          — William Penn
        </p>
      </div>
    </div>
  );
};

export default Quote;
