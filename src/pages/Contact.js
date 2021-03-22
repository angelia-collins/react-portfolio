import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Block from "../components/Block/index";
import Header from "../components/Header/index";

function Contact() {
  return (
    <Container fluid>
      <Block>
        <Header>Contact</Header>
        <div className="dropdown-divider"></div>
        <p>Email: angiecollins09@gmail.com<br />
                Phone: 214-608-6110</p>
                  <a href="https://www.linkedin.com/in/angelia-collins-57237b80/" target="_blank">LinkedIn</a>
                  <br />
                  <a href="https://github.com/angelia-collins/" target="_blank">GitHub</a>
                  <br />
                  <a href="https://cargocollective.com/angiecollins/Angelia-Collins-Resume" target="_blank">Resume</a>
                  <br />
                  <a href="https://cargocollective.com/angiecollins" target="_blank">Art Direction and Design Portfolio</a>

      </Block>
    </Container>
  );
}

export default Contact;