import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/Components/Layout/Layout";
import MiddleContainer from "../src/Components/Layout/MiddleContainer";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Cheers Dashboard</title>
			</Head>
			<Layout>
				<MiddleContainer>dfgadfh</MiddleContainer>
				<p>asdfasdf</p>
			</Layout>
		</>
	);
};

export default Home;
