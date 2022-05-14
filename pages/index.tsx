import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  
  return (
    <div className="text-white font-Montserrat">
      <Head>
        <title>myFRS - Home</title>
        <meta name="description" content="my FRS app" />
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <p className="text-[#90BF0A] font-medium">Recent Loads</p>
      <p className="text-center">In Development</p>
    </div>
  );
};

export default Home;
