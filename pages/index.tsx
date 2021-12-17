import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../src/Components/Left-Side-Bar/sidebar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cheers Dashboard</title>
			</Head>
			<main className="h-screen w-screen grid grid-cols-6 gap-2">
				<Sidebar />
				<div className="col-span-4 bg-yellow-100">one</div>
				<div className="bg-blue-100">one</div>
			</main>
		</>
	);
};

export default Home;
