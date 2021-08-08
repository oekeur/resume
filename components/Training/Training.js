import { Heading, Level, Box } from "react-bulma-components";
import styles from "../Experience/experience.module.scss";
import layout from "../../styles/layout.module.scss";

const List = ({ data }) => {
  return data.map((elem, index) => {
    return (
      <Level mb="0" key={index}>
        <Level.Item className={layout.mrAuto}>{elem.name}</Level.Item>
        <Level.Item className={layout.mlAuto} italic>
          {elem.date}
        </Level.Item>
      </Level>
    );
  });
};

const Training = ({ data }) => {
  return (
    <Box className={layout.fullwidth}>
      <Heading renderAs={"h2"}>Training</Heading>
      <List data={data} />
    </Box>
  );
};

export default Training;
