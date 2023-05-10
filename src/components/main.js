import { Routes, Route } from "react-router-dom";
import Members from "./members";
import Bills from "./bills";
import Collections from "./collections";
import Installations from  "./installations";

function Main({openPopup, setMessage}) {
	return (
		<div className=" py-8 pl-8 w-full flex justify-center
		items-center">
			<Routes>
				<Route
					exact
					path="/"
					element={<Bills openPopup={openPopup}
					setMessage={setMessage} />}
				/>
				<Route
					path="/collections"
					element={<Collections />}
				/>
				
				<Route
					path="/installations"
					element={<Installations />}
				/>
				<Route 
				path="/members"
				element={<Members />} />
			</Routes>
		</div>
	);
}

export default Main;
