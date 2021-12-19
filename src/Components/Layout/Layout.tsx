import React from "react";
import Sidebar from "../Left-Side-Bar/sidebar";

const Layout: React.FC = ({ children }) => {
	return (
		<main className="h-screen w-screen grid grid-cols-6 gap-2">
			<Sidebar />
			{children}
		</main>
	);
};

export default Layout;
