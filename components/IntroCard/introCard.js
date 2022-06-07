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
        <Media.Item align="left" className={styles.posRelative}>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={200}
            height={264}
            layout="intrinsic"
            placeholder="blur"
          />
          <span title="Pronouns" className={`badge is-dark ` + styles.badgeRepositionLeft}>
            he / him
          </span>
        </Media.Item>
        <Media.Item>
          <Level>
            <Level.Side className={stylesLayout.mrAuto} align={"left"}>
              <Heading>Oscar Keur</Heading>
            </Level.Side>
            <Level.Side className={stylesLayout.mlAuto +" "+styles.posRelative} align={"right"}>
              <Icon m={1}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </Icon>
              Amsterdam, Netherlands
              <span title="remote" className={`badge is-dark ` + styles.badgeRepositionRight}>
                + Remote
              </span>
            </Level.Side>
          </Level>
          <TagGroup data={data.basics.competences} />
          <Message>
            <Message.Body>
              {data.basics.summary}
            </Message.Body>
          </Message>
          <Heading subtitle renderAs={"h3"}>
            Personal interests
          </Heading>
          <TagGroup data={data.basics.interests} />
        </Media.Item>
      </Media>
    </Box>
  );
};

export default IntroCard;
