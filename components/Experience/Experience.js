import { Box, Heading, Level } from "react-bulma-components";
import stylesLayout from "../../styles/layout.module.scss";
import stylesUtils from "../../styles/utils.module.scss";

const Professional = ({ work }) => {
  return work.map((elem, index) => {
    const hasHighLight = elem.highlights !== undefined;
    const hasSummary = elem.summary !== undefined;
    return (
      <div key={index}>
        <Level className={stylesLayout.justifyCenter}>
          <Level.Item className={stylesLayout.mrAuto} >
            {elem.position}
          </Level.Item>
          <Level.Item className={stylesLayout.flexOne}>{hasSummary ? elem.company : elem.name}</Level.Item>
          <Level.Item className={stylesLayout.mlAuto} italic>
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
      <ul className={stylesUtils.resetList}>
        {highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li>;
        })}
      </ul>
    </div>
  );
};

const Experience = ({ data }) => {
  return (
    <Box className={stylesLayout.fullwidth}>
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
