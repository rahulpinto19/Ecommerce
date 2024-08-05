import React from "react";

const SearchBar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center w-full">
        <div className="relative w-full max-w-4xl">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full py-2 mx-7  pl-10 pr-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-12 top-1/2 transform -translate-y-1/2  h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
