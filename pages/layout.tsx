import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
    return (
      <div className="bg-[#000000] flex flex-col min-h-screen font-Montserrat">
        <Head>
          <title>myFRS - Home</title>
          <meta name="description" content="my FRS app" />
          <link rel="icon" href="/logo.svg" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <h1 className="text-[#C0FF0D] font-semibold text-2xl px-4 pt-4">myFRS</h1>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bottom-0 bg-[#161616] p-4 w-screen">
          <nav className="list-none font-medium flex pb-4 justify-around text-xs">
            <Link href={`/`}>
              <li
                className={
                  router.pathname == "/" ? "active-link" : "not-active-link"
                }
              >
                <Image
                  src={
                    router.pathname == "/"
                      ? "/images/home-active.svg"
                      : "/images/home.svg"
                  }
                  height={30}
                  width={30}
                />
                <p className="pt-1">Home</p>
              </li>
            </Link>
            <Link href={`/add-load`}>
              <li
                className={
                  router.pathname == "/add-load"
                    ? "active-link"
                    : "not-active-link"
                }
              >
                <Image
                  src={
                    router.pathname == "/add-load"
                      ? "/images/add-active.svg"
                      : "/images/add.svg"
                  }
                  height={30}
                  width={30}
                />
                <p className="pt-1">Add Load</p>
              </li>
            </Link>
            <Link href={`/stats`}>
              <li
                className={
                  router.pathname == "/stats"
                    ? "active-link"
                    : "not-active-link"
                }
              >
                <Image src="/images/stats.svg" height={30} width={30} />
                <p className="pt-1">Stats</p>
              </li>
            </Link>
          </nav>
        </footer>
      </div>
    );
}