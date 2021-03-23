import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Block from "../components/Block/index";
import Header from "../components/Header/index";
import corona from "../assets/corona.png";
import creeper from "../assets/creeper.png";
import weather from "../assets/weather.png";

function Portfolio() {
  return (
    <Container fluid>
      <Block>
        <Header>Portfolio</Header>
        <div className="dropdown-divider"></div>
        <h4>Corona Survival</h4>
        <a href="https://mpapamichalis.github.io/Corona-Survival/" target="_blank"><img src={corona} className="img-fluid" alt="placeholder image"/></a>
        <br />
        <a href="https://mpapamichalis.github.io/Corona-Survival/" target="_blank">Deployed Project</a>
        <br />
        <a href="https://github.com/angelia-collins/Corona-Survival" target="_blank">Github Repo</a>
        <h4>Creeper Crew</h4>
        <a href="https://powerful-shelf-96564.herokuapp.com/" target="_blank"><img src={creeper} className="img-fluid" alt="placeholder image"/></a>
        <br />
        <a href="https://powerful-shelf-96564.herokuapp.com/" target="_blank">Deployed Project</a>
        <br />
        <a href="https://github.com/angelia-collins/creeper-crew" target="_blank">Github Repo</a>
        <h4>Weather Dashboard</h4>
        <a href="https://angelia-collins.github.io/weather-dashboard/" target="_blank"><img src={weather} className="img-fluid" alt="placeholder image"/></a>
        <br />
        <a href="https://angelia-collins.github.io/weather-dashboard/" target="_blank">Deployed Project</a>
        <br />
        <a href="https://github.com/angelia-collins/weather-dashboard" target="_blank">Github Repo</a>


      </Block>
    </Container>
  );
}
  
  export default Portfolio;