import React, { useState } from "react";

function Form({setIsOpen}) {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleImageUpload = (event) => {
    // Handle image upload logic here
  };

  const handleExcelUpload = (event) => {
    // Handle Excel sheet upload logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-full flex flex-col items-center" >
        <div className="flex justify-start mb-2 ">
							<button
								className="text-bold bg-white p-1 rounded-full"
								onClick={() => setIsOpen(false)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-x-circle"
									viewBox="0 0 16 16"
								>
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
								</svg>
							</button>
						</div>
    
    <div className="md:w-2/3 bg-transpatent p-4 flex flex-col items-center
    rounded-md">
    <form onSubmit={handleSubmit}>
      <div className="mb-8 bg-white inline-block rounded-md" >
        <label htmlFor="month"></label>
        <select id="month"
        className="rounded-md"
         value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Select Bill month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className="mb-6 py-8 max-w-full rounded-md bg-white
      flex flex-col justify-center items-center " >
        <button 
        className="p-4" >
        <label for="imageUpload" role="button" 
        className="" >Upload POP</label>
        <input type="file" id="imageUpload" accept="image/*"
        className="invisible"
         onChange={handleImageUpload} />
         </button>
      </div>
      <div className="mb-6 py-8 max-w-full rounded-md bg-white
      flex flex-col justify-center items-center " >
        <button  
        className="p-4" >
        <label for="imageUpload" role="button" 
        className="" >Upload Playover List</label>
        <input type="file" id="imageUpload" accept="image/*"
        className="invisible"
         onChange={handleImageUpload} />
         </button>
      </div>
      <button type="submit" 
      className="bg-black py-2 px-6
      text-white rounded-md">submit and Reconcile</button>
    </form>
    </div>
    </div>
  );
}
export default Form