import { Icon, Navbar, Button, Heading } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <Navbar fixed="top" className={styles.boxShadow}>
      <Heading size={1}>About me</Heading>
      <Navbar.Container align="right">
        <Button as="a" href="https://github.com/oekeur">
          <Icon size={"large"}>
            <FontAwesomeIcon icon={faGithub} size={"lg"} />
          </Icon>
          <span>Github</span>
        </Button>
        <Button as="a" href="https://www.linkedin.com/in/oscarkeur/">
          <Icon size={"large"}>
            <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
          </Icon>
          <span>Linkedin</span>
        </Button>
        <Button as="a" href="https://www.instagram.com/oekeu/">
          <Icon size={"large"}>
            <FontAwesomeIcon icon={faInstagram} size={"lg"} />
          </Icon>
          <span>Instagram</span>
        </Button>
      </Navbar.Container>
    </Navbar>
  );
}
