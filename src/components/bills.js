import { useState } from "react";
import data from "./data";
import DropdownMenu from "./dropdown";

function Bills({openPopup, setMessage}) {
	const [filterData, setfilterData] = useState(data);

	const handleFilter = (option, subOption) => {
		const newData = data.filter((obj) => obj[option] === subOption);
		setfilterData(newData);
	};

  const clearFilter = () => {
    setfilterData(data);
  }

	return (
		<div>
			<DropdownMenu handleFilter={handleFilter} 
      clearFilter={clearFilter} />
			<div className="py-4" >
				<input
          className="outline-none border-0 px-1 rounded-md
          offset-ring-0"
					type="text"
					placeholder="Search"
				/>
			</div>
      <div className="flex flex-col border rounded-md text-sm">
  <div className="flex bg-customGray text-black font-semibold">
    <div className="flex-1 px-4 py-2"></div>
    <div className="flex-1 px-4 py-2">Scheme ID</div>
    <div className="flex-1 px-4 py-2">Scheme Name</div>
    <div className="flex-1 px-4 py-2">Insurer</div>
    <div className="flex-1 px-4 py-2">Latest Bill Month</div>
    <div className="flex-1 px-4 py-2">Activity</div>
    <div className="flex-1 px-4 py-2">Member Data</div>
    <div className="flex-1 px-4 py-2">Last Interacted With</div>
  </div>
  {filterData.map((item, index) => (
    <div key={item.schemeId} className={`flex items-center ${index % 2 === 0 ? 'bg-white' : 'bg-purple-200'}
      hover:bg-indigo-100 border-b border-purple-50 px-0 py-2`}>
      <div className="flex-1 px-4">
        <input type="checkbox" checked={false} readOnly />
      </div>
      <div className="flex-1 px-4">{item.schemeId}</div>
      <div className="flex-1 px-4">{item.schemeName}</div>
      <div className="flex-1 px-4">{item.insurer}</div>
      <div className="flex-1 px-4">{item.latestBillMonth}</div>
      <div className="flex-1 px-4"><button>Edit</button></div>
      <div className="flex-1 px-4"><button>View</button></div>
      <div className="flex-1 px-4">{item.lastInteractedWith}</div>
    </div>
  ))}
</div>

      {/*
			<table className="table-auto border rounded-md text-sm">
  <thead className="bg-customGray">
    <tr>
      <th className="px-4 py-2"></th>
      <th className="px-4 py-2">Scheme ID</th>
      <th className="px-4 py-2">Scheme Name</th>
      <th className="px-4 py-2">Insurer</th>
      <th className="px-4 py-2">Latest Bill Month</th>
      <th className="px-4 py-2">Activity</th>
      <th className="px-4 py-2">Member Data</th>
      <th className="px-4 py-2">Last Interacted With</th>
    </tr>
  </thead>
  <tbody>
    {filterData.map((item, index) => (
      <tr key={item.schemeId} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-blue-50'}
       hover:bg-indigo-100 border-b border-blue-200`}>
        <td className="px-4 py-2">
          <input type="checkbox" checked={false} />
        </td>
        <td className="px-4 py-2">{item.schemeId}</td>
        <td className="px-4 py-2">{item.schemeName}</td>
        <td className="px-4 py-2">{item.insurer}</td>
        <td className="px-4 py-2">{item.latestBillMonth}</td>
        <td className="px-4 py-2"><button>Edit</button></td>
        <td className="px-4 py-2"><button>View</button></td>
        <td className="px-4 py-2">{item.lastInteractedWith}</td>
      </tr>
    ))}
  </tbody>
</table> */}


			<div className="flex gap-6 pt-4" >
				<button className="inline-block 
                px-8 py-2 bg-black text-white rounded-md"
                onClick={() => {
                  setMessage("All amendments have been saved ");
                  openPopup();
                }} >Apply Amendments </button>
				<button className="inline-block 
                px-8 py-2 bg-black text-white rounded-md" 
                onClick={() => {
                  setMessage("Bill has been generated");
                  openPopup();
                }}>Generate Bill </button>
			</div>
		</div>
	);
}
export default Bills;
