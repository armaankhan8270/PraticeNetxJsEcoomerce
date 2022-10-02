import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateStoreContext } from "../context/Items";
import Script from "next/script";
import Head from "next/head";
import Navbar from "./navbar";

function MyApp({ Component, pageProps }) {
  return (
    <StateStoreContext>
      <Navbar />
      <Component {...pageProps} />
    </StateStoreContext>
  );
}

export default MyApp;
