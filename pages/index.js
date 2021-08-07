import Head from "next/head";
import styles from "../styles/Home.module.css";
import layout from "../styles/layout.module.scss";
import NavBar from "../components/NavBar/NavBar";
import { Box, Container, Heading } from "react-bulma-components";
import IntroCard from "../components/IntroCard/introCard";
import TagGroup from "../components/TagGroup/TagGroup";
import { useAppContext } from "../context/state";
import Languages from "../components/Languages/Languages";
import Experience from "../components/Experience/Experience";
import Training from "../components/Training/Training";

export default function Home() {
  const data = useAppContext();
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
          <Experience data={data.activities} />
          <Languages data={data.languages} />
          <Box>
            <Heading renderAs={"h2"}>Interests</Heading>
            <Heading subtitle renderAs={"h3"}>
              Personal
            </Heading>
            <TagGroup data={data.interests.personal} />
            <Heading subtitle renderAs={"h3"}>
              Professional
            </Heading>
            <TagGroup data={data.interests.professional} />
          </Box>
          <Box className={layout.fullwidth}>
            <Training data={data.education.training} />
          </Box>
        </main>
      </Container>
    </div>
  );
}
