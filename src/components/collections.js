import React, { useState } from 'react';
import data from './data2';
import Form from './collectionsform';

const Collections = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center items-center " >
      <div className="flex flex-col border rounded-md text-sm">
				<div className="flex bg-customGray text-black font-semibold">
					<div className="flex-1 px-4 py-2"></div>
					<div className="flex-1 px-4 py-2">Scheme ID</div>
					<div className="flex-1 px-4 py-2">Scheme Name</div>
					<div className="flex-1 px-4 py-2">Insurer</div>
					<div className="flex-1 px-4 py-2">Latest Bill Month</div>
					<div className="flex-1 px-4 py-2">Payments</div>
					<div className="flex-1 px-4 py-2">Collections</div>
					<div className="flex-1 px-4 py-2">Last Interacted With</div>
				</div>
				{data.map((item, index) => (
					<div
						key={item.schemeId}
						className={`flex items-center ${
							index % 2 === 0 ? "bg-white" : "bg-purple-200"
						}
                border-b border-purple-50 px-0 py-2`}
					>
						<div className="flex-1 px-4">
							<input
								type="checkbox"
								checked={false}
								readOnly
							/>
						</div>
						<div className="flex-1 px-4">{item.schemeID}</div>
						<div className="flex-1 px-4">{item.schemeName}</div>
						<div className="flex-1 px-4">{item.insurer}</div>
						<div className="flex-1 px-4">{item.latestBillMonth}</div>
						<div className="flex-1 px-4">
							<button>View</button>
						</div>
						<div className="flex-1 px-4">
							<button 
              onClick={() => setIsOpen(true)}
               >Reconcile</button>
						</div>
						<div className="flex-1 px-4">{item.lastInteractedWith}</div>
					</div>
				))}
			</div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
        flex justify-center items-center backdrop-blur-[2px] ">
          
          <Form 
          setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default Collections;
