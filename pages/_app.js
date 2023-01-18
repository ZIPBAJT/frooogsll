import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";
import { Nav } from "../components/Nav";
import { Neznau } from "../components/Neznau";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Neznau>
        <Component {...pageProps} />
      </Neznau>
      <Nav />
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}

export default MyApp;
