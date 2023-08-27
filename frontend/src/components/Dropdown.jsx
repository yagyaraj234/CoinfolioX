import React, { useState } from "react";
import { useCurrency } from "./Context/CurrencyContext";

const Dropdown = () => {
  const { setCurrency, setSymbol } = useCurrency();

  const options = [
    { value: "usd", label: "USD", symbol: "$" },
    { value: "inr", label: "INR", symbol: "₹" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option); // Update the selected option
    setIsOpen(false); // Close the dropdown after an option is selected
    setCurrency(option.value); // Set the selected currency
    setSymbol(option.symbol);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown's open/close state
  };

  return (
    <div className="relative inline-block text-left">
      <div className="text-xs">
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 pt-1 font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedOption.label}
          <svg
            className={`-mr-1 ml-1 h-5 w-5 transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 w-full ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionChange(option)}
                className={`${
                  selectedOption === option
                    ? "text-lightblue font-semibold bg-indigo-50"
                    : "text-black"
                } group flex items-center w-full px-4 py-2 text-sm`}
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
