import styles from "../styles/Home.module.css";
import layout from "../styles/layout.module.scss";
import NavBar from "../components/NavBar/NavBar";
import { Box, Columns, Container, Heading } from "react-bulma-components";
import IntroCard from "../components/IntroCard/introCard";
import { useAppContext } from "../context/state";
import Languages from "../components/Languages/Languages";
import Experience from "../components/Experience/Experience";
import Training from "../components/Training/Training";
import Education from "../components/Education/Education";
import SkillsBadge from "../components/SkillsBadge/SkillsBadge";
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import photo from "../public/photo.jpg"

export default function Home() {
  const data = useAppContext();
  return (
    <div className={styles.container}>
      <NextSeo
        title="Resume | Oscar Keur"
        description="Experienced backend and fullstack developer based in Amsterdam, available for remote hire. Looking to make a positive impact."
        canonical="https://oscarkeur.dev"
        openGraph={{
          url: 'https://oscarkeur.dev',
          title: 'Resume | Oscar Keur',
          description: 'Experienced backend and fullstack developer based in Amsterdam, available for remote hire. Looking to make a positive impact.',
          type: 'profile',
          profile: {
            firstName: 'Oscar',
            lastName: 'Keur'
          },
          images: [
            {
              url: 'https://oscarkeur.dev'+photo.src,
              width: photo.width,
              height: photo.height,
              alt: 'Profile Picture',
            },
          ],
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Oscar Keur"
        url="https://oscarkeur.dev"
        sameAs={[
          'https://www.linkedin.com/in/oscarkeur/',
          'https://www.instagram.com/oekeu/',
          'https://github.com/oekeur',
        ]}
      />

      <NavBar />

      <Container className={styles.container}>
        <main className={styles.main}>
          <IntroCard />
          <Box className={layout.fullwidth}>
            <Heading renderAs={"h2"}>Skills</Heading>
            <Columns>
              <Columns.Column>
                <Heading subtitle renderAs={"h3"}>Technologies</Heading>
                <SkillsBadge data={data.skills.technologies} />
              </Columns.Column>

              <Columns.Column>
                <Heading subtitle renderAs={"h3"}>Techniques</Heading>
                <SkillsBadge data={data.skills.methods} />
              </Columns.Column>
            </Columns>



            <Heading subtitle renderAs={"h3"}>Tools & Platforms</Heading>
            <Columns>
              <Columns.Column>
                <SkillsBadge data={data.skills["tools & platforms"].slice(0, Math.ceil(data.skills["tools & platforms"].length / 2) )} />
              </Columns.Column>

              <Columns.Column>
                <SkillsBadge data={data.skills["tools & platforms"].slice(-Math.ceil(data.skills["tools & platforms"].length / 2) )} />
              </Columns.Column>
            </Columns>

          </Box>
          <Experience data={data.activities} />

          <Education data={data.education.institutional} />
          <Training data={data.education.training} />
          <Languages data={data.languages} />
        </main>
      </Container>
    </div>
  );
}
