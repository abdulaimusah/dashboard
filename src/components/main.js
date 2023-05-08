import { Routes, Route } from "react-router-dom";
import Bills from "./bills";
import Collections from "./collections";
import Installations from  "./installations";

function Main({openPopup, setMessage}) {
	return (
		<div className=" py-8 pl-8 ">
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
			</Routes>
		</div>
	);
}

export default Main;
