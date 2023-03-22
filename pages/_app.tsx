import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>iTunes Search</title>
        <meta name="description" content="iTunes Search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
        <Component {...pageProps} />
        {/* </div> */}
      </main>
    </>
  );
}
