import React, { useState } from "react";
import members from "./data3";
import { Link } from "react-router-dom";

const Members = () => {
	const [memberTypes, setMemberTypes] = useState([
		"Principal Member",
		"Child",
		"Spouse",
	]);

	// Filter the members based on memberTypes state
	const filteredMembers = members.filter((member) =>
		memberTypes.includes(member.memberType),
	);
	// Function to handle member type checkbox change
	const handleCheckboxChange = (event) => {
		const value = event.target.value;
		if (memberTypes) {
			if (memberTypes.includes(value)) {
				setMemberTypes(memberTypes.filter((type) => type !== value));
			} else {
				setMemberTypes([...memberTypes, value]);
			}
		} else {
			setMemberTypes(["Principal Member", "Child", "Spouse"]);
		}
	};

	const [showMemberFilter, setShowMemberFilter] = useState(false);

	const toggleMemberFilter = () => {
		setShowMemberFilter(!showMemberFilter);
	};

	console.log(filteredMembers);

	return (
		<div
			className="flex flex-col relative
       w-full h-full
    "
		>
			<div className="">
				<Link to="/">
					<button
						className="bg-black text-white py-1
        rounded-md mb-4
        px-2"
					>
						back
					</button>
				</Link>
			</div>
			{/* Table header */}
			<div className="flex flex-row bg-gray-200 font-semibold px-2 py-1 gap-2 relative ">
				<div className=" bg-gray-200 w-32 ">Administrator</div>
				<div className=" bg-gray-200 w-32">Member Name</div>
				<div className="flex flex-1 ">
					{/* Table columns */}
					<div className="w-32  ">
						Member type
						<button
							onClick={toggleMemberFilter}
							className=""
						>
							<svg
								className="-mr-1 bg-blue-600 text-white h-3 w-4 
          pt-0 ml-1 rounded-sm"
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
						</button>
						{showMemberFilter && (
							<div
								className="absolute top-8 left-40  z-50 bg-slate-800
                  p-4 text-white rounded-md "
							>
								<label>Member Types:</label>
								<div className="flex flex-col gap-4 rounded-md">
									<label>
										<input
											type="checkbox"
											value="Principal Member"
											checked={memberTypes.includes("Principal Member")}
											onChange={handleCheckboxChange}
										/>
										Principal Member
									</label>
									<label>
										<input
											type="checkbox"
											value="Child"
											checked={memberTypes.includes("Child")}
											onChange={handleCheckboxChange}
										/>
										Child
									</label>
									<label>
										<input
											type="checkbox"
											value="Spouse"
											checked={memberTypes.includes("Spouse")}
											onChange={handleCheckboxChange}
										/>
										Spouse
									</label>
								</div>
							</div>
						)}{" "}
					</div>
					<div className="w-32">Rate Type</div>
					<div className="w-32">Date of Birth</div>
					<div className="w-32">Policy Status</div>
					<div className="w-32">Inception Date</div>
				</div>
			</div>
			{/* Table body */}
			<div className="flex flex-col flex-1 overflow-y-auto">
				{filteredMembers.map((member, index) => (
					<div
						key={member.memberName}
						className={` flex flex-row border-b
          ${index % 2 === 0 ? "bg-white" : "bg-purple-200"}
          `}
					>
						<div className="w-32 pl-6 px-2 py-1">{member.administrator}</div>
						<div className="w-32 pl-6 px-2 py-1">{member.memberName}</div>
						<div className="flex flex-1 ">
							{/* Table columns */}
							<div className="w-32  pl-6 px-2 py-1 relative">
								{member.memberType}
							</div>
							<div className="w-32 pl-6 px-2 py-1">{member.rateType}</div>
							<div className="w-32  pl-6 px-2 py-1">{member.dob}</div>
							<div className="w-32  pl-6 px-2 py-1">{member.policyStatus}</div>
							<div className="w-32  pl-6 px-2 py-1">{member.inceptionDate}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Members;
