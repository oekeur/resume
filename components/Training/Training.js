import { Heading, Level, Box } from "react-bulma-components";
import layout from "../../styles/layout.module.scss";
import stylesUtils from "../../styles/utils.module.scss"

const List = ({ data }) => {
  return data.map((elem, index) => {
    return (
      <Level className={stylesUtils.noMb} key={index}>
        <Level.Side className={layout.mrAuto} align={"left"}>{elem.name}</Level.Side>
        <Level.Side className={layout.mlAuto} italic align={"right"}>
          {elem.date}
        </Level.Side>
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
