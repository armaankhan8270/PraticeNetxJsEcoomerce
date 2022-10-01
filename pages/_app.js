import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateStoreContext } from "../context/Items";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <StateStoreContext>
      <link href="../styles/stylle.css" rel="stylesheet" />
      <Component {...pageProps} />
    </StateStoreContext>
  );
}

export default MyApp;
