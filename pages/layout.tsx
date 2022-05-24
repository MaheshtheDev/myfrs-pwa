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
      <div className="flex min-h-screen flex-col bg-[#000000] font-Montserrat">
        <Head>
          <title>myFRS - Home</title>
          <meta name="description" content="my FRS app" />
          <link rel="icon" href="/logo.svg" />
          <meta name="theme-color" content="#000000" />
        </Head>
        <div className="flex justify-between px-4">
          <h1 className="pt-4 text-2xl font-semibold text-[#C0FF0D]">
            myFRS
          </h1>
          <div className="flex items-end pb-1">
            <Image src="/images/user.svg" height={25} width={25} />
          </div>
        </div>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bottom-0 w-screen bg-[#161616] p-4">
          <nav className="flex list-none justify-around pb-4 text-xs font-medium">
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