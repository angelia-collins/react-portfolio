import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Block from "../components/Block/index";
import Header from "../components/Header/index";

function Home() {
  return (
    <Container fluid>
      <Block>
        <Header>About Me</Header>
        <div className="dropdown-divider"></div>
        <img src="assets/my-ac-avatar.png" className="img-fluid" id="toTheLeft" alt="animal crossing avatar" />
        <p>Graphic Design, Art Direction and now Developer. I am a one-stop shop extraordinaire for anything you need.
          <br /><br />
          I started my career designing for social media campaigns and have since created the full gambit of print and
          digital campaigns.
          From tiny advertising agencies to massive global corporations, I've done it all. What I haven't done is a very
          short list and I'm
          closing the gap day by day.
          <br /><br />
          Dependable, reliable and friendly, I am easy to work with. In my free time I like to play video games and pet
          my friends' dogs and cats.
          Want to come to my island in Animal Crossing? Hit me up!
        </p>
      </Block>
    </Container>
      );
}

export default Home;