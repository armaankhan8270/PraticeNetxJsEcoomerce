import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// export const getStaticProps= async ()=> {
//   const res= await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&facet=true&begin_date=20120101&end_date=20120101&api-key=FAwwxCKuwl3wrRw5hqZINAZ0HCeZT9jK')
//    const data= await res.json();
//    console.log(data);
//    return {
//      props:{
//        data
//      }
//    }

//  }

export default function Home({ data }) {
  return (
    <div className="containers1">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <div className={styles.he}>
          <Link href="HOME">
            <a className={styles.navs}>HOME</a>
          </Link>
          <Link href="ABOUT">
            <a className={styles.navs}>ABOUT</a>
          </Link>
          <Link href="Blog">
            <a className={styles.navs}>BLOGS</a>
          </Link>
          <Link href="Product">
            <a className={styles.navs}>PRODUCT</a>
          </Link>
          <Link href="fetc">
            <a className={styles.navs}>PRODUCT23</a>
          </Link>
        </div>
        <h1 className="text-center fontss ">welcome to the next js</h1>
        <p className="text-center fontss1 text-danger ">armaan khan</p>
      </main>
    </div>
  );
}
// const="<div className=" container  fs-3 text-center my-5 mx-auto navs d-flex bg-black rounded-pill text-light">"
