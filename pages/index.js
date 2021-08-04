import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "react-bulma-components";
import IntroCard from "../components/IntroCard/introCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume | Oscar Keur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Container className={styles.container}>
        <main className={styles.main}>
          <IntroCard />
          <hr className={styles.dashed} />
        </main>
      </Container>
    </div>
  );
}
