import { Fragment } from "react";
import { Box, Heading, Level } from "react-bulma-components";
import stylesLayout from "../../styles/layout.module.scss";
import stylesUtils from "../../styles/utils.module.scss";

const Professional = ({ work }) => {
  return work.map((elem, index) => {
    const hasHighLight = elem.highlights !== undefined;
    const hasSummary = elem.summary !== undefined;
    return (
      <Fragment key={index}>
        <Level className={stylesLayout.justifyCenter +" "+  stylesUtils.noMb}>
          <Level.Side className={stylesLayout.mrAuto} textWeight={"semibold"} align={"left"} >
            {elem.position}
          </Level.Side>
          <Level.Item className={stylesLayout.flexOne}>{hasSummary ? elem.company : elem.name}</Level.Item>
          <Level.Side className={stylesLayout.mlAuto} italic align={"right"}>
            {elem.date}
          </Level.Side>
        </Level>
        {hasSummary ? <p>{elem.summary}</p> : ""}
        {hasHighLight ? <Results highlights={elem.highlights} /> : ""}
        {hasSummary ? <hr /> : ""}
      </Fragment>
    );
  });
};

const Results = ({ highlights }) => {
  return (
    <Fragment>
      <Heading subtitle renderAs={"h4"} className={stylesUtils.noMb +" "+stylesUtils["mt-1"]} >
        Key results:
      </Heading>
      <ul className={stylesUtils.resetList}>
        {highlights.map((highlight, index) => {
          return <li key={index}>{highlight}</li>;
        })}
      </ul>
    </Fragment>
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
