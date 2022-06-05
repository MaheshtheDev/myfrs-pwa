import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { data: session } = useSession();
  var [showError, setShowError] = useState(false);

  function onSignIn(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    signIn("credentials", {
      redirect: false,
      email: target.email.value,
      password: target.password.value,
    }).then((err: any) => {
      if (err.status != 200) {
        setShowError(!showError);
      }
      else {
        console.log("signed in");
      }
    });
  }

  if (session) {
    return (
      <div className="flex min-h-screen flex-col bg-[#000000] font-Montserrat">
        <Head>
          <title>myFRS - Home</title>
          <meta name="description" content="my FRS app" />
          <link rel="icon" href="/logo.svg" />
          <meta name="theme-color" content="#000000" />
        </Head>
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
                <Image
                  src={
                    router.pathname == "/stats"
                      ? "/images/stats-active.svg"
                      : "/images/stats.svg"
                  }
                  height={30}
                  width={30}
                />
                <p className="pt-1">Stats</p>
              </li>
            </Link>
          </nav>
        </footer>
      </div>
    );
  } else {
    return (
      <div className="flex min-h-screen flex-col justify-center bg-[#000000] p-3 font-Montserrat text-white">
        <h1 className="text-center text-3xl font-semibold text-[#C0FF0D]">
          myFRS
        </h1>
        <div className="mx-2 my-2 rounded-md bg-[#1E1E1E] p-5 text-center">
          <p className="pb-4 text-xl font-semibold text-[#90BF0A]">Sign In / Sign Up</p>
          <form
            className=" flex flex-col justify-center text-black"
            onSubmit={onSignIn}
          >
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              className="mb-2 h-8 rounded-sm bg-[#C4C4C4] px-2 outline-none"
            />
            <input
              type="password"
              name="Password"
              id="password"
              placeholder="Password"
              className="mb-2 h-8 rounded-sm bg-[#C4C4C4] px-2 outline-none"
            />
            {showError ? (
              <p className="pb-2 text-sm text-[#C0FF0D]">
                * Credentials are Incorrect!
              </p>
            ) : null}
            <button
              className="flex items-center justify-center rounded-sm bg-[#C0FF0D] px-10 py-1 font-medium"
              type="submit"
            >
              <span className="pr-2 text-black">Login</span>
            </button>
          </form>
          <p className="py-2 float-left text-xs"><span className="brightness-50">Don&apos;t have a account?</span> <span className="text-yellow-500">Contact us!</span></p>
        </div>
        <div className="py-2 text-center text-[#90BF0A]">
          <span className="text-[#757575]">created by </span>
          <span className="font-semibold">MAHESHTHEDEV</span>
        </div>
      </div>
    );
  }
}
