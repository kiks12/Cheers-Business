import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cheers Dashboard</title>
			</Head>
			<main className="h-screen w-screen grid grid-cols-6">
				<div>one</div>
				<div className="col-span-4">one</div>
				<div>one</div>
			</main>
		</>
	);
};

export default Home;
