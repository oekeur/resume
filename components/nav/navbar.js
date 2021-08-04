import { Icon, Navbar, Field, Control, Button, Title } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const NavBar = () => {
  return (
    <Navbar fixed="top">
      <Title size={1}>About me: Oscar Keur</Title>
      <Navbar.Segment align="end">
        <Navbar.Item as="div">
          <Field kind="group">
            <Control>
              <Button as="a" href="https://github.com/oekeur">
                <Icon size={"large"}>
                  <FontAwesomeIcon icon={faGithub} size={"lg"} />
                </Icon>
                <span>Github</span>
              </Button>
            </Control>
            <Control>
              <Button as="a" href="https://www.linkedin.com/in/oscarkeur/">
                <Icon size={"large"}>
                  <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
                </Icon>
                <span>Linkedin</span>
              </Button>
            </Control>
            <Control>
              <Button as="a" href="https://www.instagram.com/oekeu/">
                <Icon size={"large"}>
                  <FontAwesomeIcon icon={faInstagram} size={"lg"} />
                </Icon>
                <span>Instagram</span>
              </Button>
            </Control>
          </Field>
        </Navbar.Item>
      </Navbar.Segment>
    </Navbar>
  );
};

export default NavBar;
