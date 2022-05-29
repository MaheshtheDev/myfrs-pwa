import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import LoadCard from "../components/load-card";
import { CompleteLoadDetails } from "../components/types";
import fetcher from "../lib/fetcher";

export default function Home() {
  //const completeLoadDetails: CompleteLoadDetails;
  const { data: completeLoadDetails, error } = useSWR<CompleteLoadDetails[]>('/api/loads', fetcher);
  console.log(completeLoadDetails);

  if(!completeLoadDetails) return "Loading...";
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
        {completeLoadDetails.map((loadDetails: any) => (
        <LoadCard loadDetails = {loadDetails} key={loadDetails.id}/>
        ))}
        <div className="flex items-center rounded-md bg-[#1E1E1E] p-2">
          View All
        </div>
      </section>
      <p className="text-center p-5">In Development</p>
    </div>
  );
};
