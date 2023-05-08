import React, { useState } from "react";

function DropdownMenu({ selectedOption, handleFilter,  subOptions }) {
  
  const [subSelect, setsubSelect] = useState("");

  return (
    <div>
      {(selectedOption) && (
        <div
          
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {subOptions[selectedOption].map((subOption) => (
              <div
                key={subOption}
                className="px-4 py-2 flex items-center"
              >
                <label
                  htmlFor={subOption}
                  
                >
                  <input
                    id={subOption}
                    type="checkbox"

                    checked={subOption === subSelect }
									
                    
                    
                    onChange={ checked => { checked && 
                      handleFilter(selectedOption, subOption);
                    setsubSelect(subOption)}}
                  />
                  <span className="ml-2 text-gray-700">{subOption}</span>
                </label>
{/*
                <label htmlFor={subOption.value} className="ml-3">
                  {subOption.value}
                </label> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
