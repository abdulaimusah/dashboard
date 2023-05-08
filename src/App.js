import logo from "./logo.svg";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import { useState } from "react";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");

	const openPopup = () => {
		setIsOpen(true);
	};

	const closePopup = () => {
		setIsOpen(false);
	};

	return (
		<div className="min-h-screen">
			<Header />
			<main
				style={{ minHeight: "calc(100vh - 3rem)" }}
				className="flex gap-2 bg-gray-200 "
			>
				<Sidebar />
				<Main
					openPopup={openPopup}
					setMessage={setMessage}
				/>
			</main>
			{isOpen && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50
         flex justify-center items-center backdrop-blur-[2px] "
				>
					<div
						className={`border-2 border-gray-500 bg-white rounded-lg shadow-lg p-4 w-full
            max-w-sm`}
					>
						<div className="flex justify-start mb-2">
							<button className="text-bold" onClick={closePopup}>
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
						<div
							className="flex justify-center items-center mb-2
            font-bold text-md"
						>
							<h2>Success</h2>
						</div>
						<div
							className="mb-8 font-bold text-md 
            flex justify-center"
						>
							<p>{message}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
