import { Tag } from "react-bulma-components";

const TagGroup = ({ data }) => {
  return (
    <Tag.Group>
      {data.map((element, index) => {
        return (
          <Tag key={index} size="medium" rounded={true}>
            {element}
          </Tag>
        );
      })}
    </Tag.Group>
  );
};

export default TagGroup;
