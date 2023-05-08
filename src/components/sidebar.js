import React from "react";
import { Link } from "react-router-dom";


function Sidebar() {
	return (
		<aside className=" bg-black
		text-white ">
			<nav className=" flex flex-col gap-6 items-start pl-4 p-2
			text-sm" >
				<button className="block ">
					<Link to="/">Bills and Amendments</Link>
				</button>
				<button className="block ">
					<Link to="collections">Collections</Link>
				</button>
				<button className="block ">
					<Link to="installations">Installations</Link>
				</button>
			</nav>
		</aside>
	);
}

export default Sidebar;
