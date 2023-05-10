import React from "react";

function Installations() {
	return (
		<div className="flex flex-col items-center justify-center md:w-2/3">
			<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="firstName"
					>
						Scheme ID
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="firstName"
						type="text"
						placeholder="Scheme ID"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="lastName"
					>
						Scheme Name
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="lastName"
						type="text"
						placeholder="Scheme Name"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="email"
					>
						Insurer
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Insurer"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-bold mb-2"
						htmlFor="email"
					>
						Insurance type
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Insurance type"
					/>
				</div>
				
				<div className="flex items-center justify-between">
					<button
						className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="button"
					>
						Add
					</button>
				</div>
			</form>
			<div className="mb-4">
				
				<input
					className="hidden"
					id="excelSheet"
					type="file"
					accept=".xls,.xlsx"
				/>
				<button
					className="bg-slate-50 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => document.getElementById("excelSheet").click()}
				>
					Upload Excell Sheet
				</button>
			</div>
			<div>
				<button
					className="bg-slate-50 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Scheme Rules
				</button>
			</div>
		</div>
	);
}

export default Installations;
