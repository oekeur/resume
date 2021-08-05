import { Box, Heading } from "react-bulma-components";
import layout from "../../styles/layout.module.scss";

function Languages({ data }) {
  return (
    <Box className={layout.fullwidth}>
      <Heading renderAs={"h2"}>Languages</Heading>

      {data.map((elem, index) => {
        return (
          <div key={index}>
            <span
              className={`flag-icon flag-icon-${elem.countryCode} flag-icon-squared`}
            />
            {elem.language} : {elem.fluency}
          </div>
        );
      })}
    </Box>
  );
}

export default Languages;
