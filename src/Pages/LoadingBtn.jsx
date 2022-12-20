import React from "react";

const LoadingBtn = () => {
  return (
    <button
      disabled
      className="relative px-9 py-2 font-medium text-white group"
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
      <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
      <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
      <span className="relative">
        <div className="flex justify-center items-center h-full">
          <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-white"></div>
        </div>
      </span>
    </button>
  );
};

export default LoadingBtn;
