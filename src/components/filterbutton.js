import React from "react";

const FilterButton = ({ showDropdown, setShowDropdown }) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center  
                rounded-md border border-gray-300 shadow-sm 
                px-4 py-2 bg-white text-sm font-medium text-gray-700 
                hover:bg-gray-50 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
      id="options-menu"
      aria-haspopup="true"
      aria-expanded="true"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      Filter
      {showDropdown ? (
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3.586L3.707 9.88a1 1 0 101.414 1.414L10
                             6.414l4.879 4.879a1 1 0 001.414-1.414L10 3.586z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 14.828l-4.879-4.88a1 1 0 00-1.414 1.414L10
                             17.657l6.293-6.293a1 1 0 00-1.414-1.414L10 14.828z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
};

export default FilterButton;
