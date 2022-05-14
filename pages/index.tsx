import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="bg-[#000000] flex flex-col min-h-screen font-Montserrat">
      <Head>
        <title>myFRS - Home</title>
        <meta name="description" content="my FRS app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <h1 className="text-[#C0FF0D] font-semibold p-4">myFRS</h1>
      <main className="flex-grow"></main>
      <footer className="bottom-0 bg-[#161616] p-4 w-screen">
        <nav className="list-none font-medium flex pb-4 justify-around">
          <li className="text-[#C0FF0D] px-2">Home</li>
          <li className="text-[#757575] px-2">Add Load</li>
          <li className="text-[#757575] px-2">Stats</li>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
