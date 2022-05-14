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
        <meta name="theme-color" content="#000000" />
      </Head>
      <h1 className="text-[#C0FF0D] font-semibold text-2xl p-4">myFRS</h1>
      <main className="flex-grow"></main>
      <footer className="bottom-0 bg-[#161616] p-4 w-screen">
        <nav className="list-none font-medium flex pb-4 justify-around text-xs">
          <li className="text-[#C0FF0D] px-2 flex flex-col">
            <Image src="/images/home.svg" height={30} width={30} />
            <p className="pt-1">Home</p>
          </li>
          <li className="text-[#757575] px-2 flex flex-col">
            <Image src="/images/add.svg" height={30} width={30} />
            <p className="pt-1">Add Load</p>
          </li>
          <li className="text-[#757575] px-2 flex flex-col">
            <Image src="/images/stats.svg" height={30} width={30} />
            <p className="pt-1">Stats</p>
          </li>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
