import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import LoadCard from "../components/load-card";
import Layout from "./layout";

const Home: NextPage = () => {
  return (
    <div className="font-Montserrat text-white">
      <Head>
        <title>myFRS - Home</title>
        <meta name="description" content="my FRS app" />
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <p className="font-medium text-[#90BF0A] pb-1">Recent Loads</p>
      <section className="flex overflow-x-auto whitespace-nowrap">
        <LoadCard />
        <LoadCard />
        <LoadCard />
        <div className="flex items-center rounded-md bg-[#1E1E1E] p-2">
          View All
        </div>
      </section>
      <p className="text-center p-5">In Development</p>
    </div>
  );
};

export default Home;
