import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "./landing";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Majid Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <Landing />
    </div>
  );
}

