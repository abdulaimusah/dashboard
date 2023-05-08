import React, { useState } from "react";
import FilterButton from "./filterbutton";
import InnerDropdown from "./innerdropdown";
import data from "./data";

const DropdownMenu = ({ handleFilter, clearFilter }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const options = [
		{ value: "schemeName" },
		// {  value: "schemeNumber" },
		{ value: "insurer" },
	];

	const SchemeNames = [...new Set(data.map((item) => item.schemeName))];
	const Insurers = [...new Set(data.map((item) => item.insurer))];

	const subOptions = {
		schemeName: SchemeNames,
		insurer: Insurers,
	};

	return (
		<div className="relative">
			<section className="flex gap-4">
				<FilterButton
					showDropdown={showDropdown}
					setShowDropdown={setShowDropdown}
				/>
				<button
					className="inline-block py-1 px-4 bg-gray-300
					rounded-md"
					onClick={() => {
						setSelectedOption(null);
						setShowDropdown(false);
						clearFilter();
					}}
				>
					Clear Filter
				</button>
			</section>
			{showDropdown && (
				<div
					className="absolute z-50 bg-white top-12 px-4
					rounded-lg border border-green-800"
				>
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						{options.map((option) => (
							<div key={option.value}>
								<input
									id={option.value}
									type="checkbox"
									checked={selectedOption === option.value}
									onChange={(checked) =>
										checked && setSelectedOption(option.value)
									}
								/>

								<label
									htmlFor={option.value}
									className="ml-3 font-semibold"
								>
									{option.value}
								</label>
								
							</div>
						))}
						<InnerDropdown
									
									selectedOption={selectedOption}
									handleFilter={handleFilter}
									subOptions={subOptions}
								/>
					</div>
				</div>
			)}
		</div>
	);
};
export default DropdownMenu;
