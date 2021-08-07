import { Box, Heading, Level } from "react-bulma-components";
import layout from "../../styles/layout.module.scss";
import styles from "./experience.module.scss";

const Professional = ({ work }) => {
  return work.map((elem) => {
    const hasHighLight = elem.highlights !== undefined;
    const hasSummary = elem.summary !== undefined;
    return (
      <div>
        <Level>
          <Level.Item className={styles.mrAuto}>{elem.position}</Level.Item>
          <Level.Item>{hasSummary ? elem.company : elem.name}</Level.Item>
          <Level.Item className={styles.mlAuto} italic>
            {elem.date}
          </Level.Item>
        </Level>
        {hasSummary ? <p>{elem.summary}</p> : ""}
        {hasHighLight ? <Results highlights={elem.highlights} /> : ""}
        {hasSummary ? <hr /> : ""}
      </div>
    );
  });
};

const Results = ({ highlights }) => {
  return (
    <div>
      <Heading subtitle renderAs={"h3"} mb={"1"} mt={"3"}>
        Key results:
      </Heading>
      <ul className={styles.resetList}>
        {highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li>;
        })}
      </ul>
    </div>
  );
};

const Experience = ({ data }) => {
  return (
    <Box className={layout.fullwidth}>
      <Heading renderAs={"h2"}>Experience</Heading>
      <Heading subtitle renderAs={"h3"}>
        Professional
      </Heading>
      <Professional work={data.work} />
      <Heading subtitle renderAs={"h3"} mb="0" mt="4">
        Extracurricular
      </Heading>
      <Professional work={data.extracurricular} />
      <hr />
      <Heading subtitle renderAs={"h3"} mb="0" mt="4">
        Additional
      </Heading>
      <Professional work={data.additional} />
    </Box>
  );
};

export default Experience;
