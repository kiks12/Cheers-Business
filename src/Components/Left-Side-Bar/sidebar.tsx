import React from "react";

const Sidebar: React.FC = () => {
	return (
		<div>
			<nav className="flex flex-col items-center justify-center">
				<h1 className="py-5 text-lg">{"{Bar Name}"}</h1>
				<ul className="flex flex-col w-full">
					<li className="h-10 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">Home</li>
					<li className="h-10 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">Reservations</li>
					<li className="h-10 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all">Settings</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
