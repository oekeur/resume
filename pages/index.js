import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data/resume.json";
import NavBar from "../components/nav/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume | Oscar Keur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar></NavBar>

      <main className={styles.main}></main>
    </div>
  );
}
