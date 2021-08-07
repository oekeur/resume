import { Heading, Level, Box } from "react-bulma-components";
import styles from "../Experience/experience.module.scss";
import layout from "../../styles/layout.module.scss";

const List = ({ data }) => {
  console.log(data);
  return data.map((elem) => {
    return (
      <Level mb="0">
        <Level.Item className={styles.mrAuto}>{elem.name}</Level.Item>
        <Level.Item className={styles.mlAuto} italic>
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
