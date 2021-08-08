import {
  Box,
  Heading,
  Icon,
  Level,
  Media,
  Message,
} from "react-bulma-components";
import Image from "next/image";
import profilePic from "../../public/photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { useAppContext } from "../../context/state";
import TagGroup from "../TagGroup/TagGroup";
import styles from "./introCard.module.scss";
import stylesLayout from "../../styles/layout.module.scss";

const IntroCard = (props) => {
  const data = useAppContext();
  return (
    <Box>
      <Media>
        <Media.Item align="left" className={styles.imgRelative}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={200}
            height={264}
            layout="intrinsic"
            placeholder="blur"
          />
          <span title="Pronouns" className="badge is-dark">
            he / him
          </span>
        </Media.Item>
        <Media.Item>
          <Level>
            <Level.Side className={stylesLayout.mrAuto}>
              <Heading>Oscar Keur</Heading>
            </Level.Side>
            <Level.Side className={stylesLayout.mlAuto}>
              <Icon m={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Icon>
              Amsterdam, Netherlands
            </Level.Side>
          </Level>
          <TagGroup data={data.basics.competences} />
          <Message>
            <Message.Body>
              Fluff marshmellow quickly, then mix with worcestershire sauce and
              serve regularly roasted in cooker. Everyone just loves the
              sourness of peanut butter fritters mixd with black pepper.
            </Message.Body>
          </Message>
          <Heading subtitle renderAs={"h3"}>
            Personal interests
          </Heading>
          <TagGroup data={data.interests.personal} />
        </Media.Item>
      </Media>
    </Box>
  );
};

export default IntroCard;
