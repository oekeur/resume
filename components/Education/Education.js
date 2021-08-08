import { Heading, Level, Box, Element } from "react-bulma-components";
import styles from "../Experience/experience.module.scss";
import layout from "../../styles/layout.module.scss";
import stylesUtils from "../../styles/utils.module.scss";

const Education = ({ data }) => {
  const { studyType, area, institution, date, courses } = { ...data[0] };
  return (
    <Box className={layout.fullwidth}>
      <Heading renderAs={"h2"}>Education</Heading>
      <Level mb="0">
        <Level.Item className={layout.mrAuto}>
          {studyType} {area}
        </Level.Item>
        <Level.Item className={layout.mlAuto}>
          {institution}
          <Element renderAs={"span"} italic>
            ({date})
          </Element>
        </Level.Item>
      </Level>
      <ul className={stylesUtils.resetList}>
        {courses.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
    </Box>
  );
};

export default Education;
