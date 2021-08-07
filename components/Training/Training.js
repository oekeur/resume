import { Heading, Level } from "react-bulma-components";
import styles from "../Experience/experience.module.scss";
import { Box } from "react-bulma-components";

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
    <div>
      <Heading renderAs={"h2"}>Training</Heading>
      <List data={data} />
    </div>
  );
};

export default Training;
