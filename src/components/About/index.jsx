import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BackArrow from "../common/backArrow";
import AboutImage from "./aboutImage";
import NavBar from "./../common/navBar";
import "./style.css";

const About = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col>
          <Row>
            <Col xs={12} md={6}>
              <h1>About</h1>
              <p>
                Front end web developer familiar with JavaScript frameworks.
                Studying design gave me a good understanding with learning new
                concepts and thinking methodologically, a skill that translates
                beautifully to writing code. I am excited to connect people
                through technology after having experience connecting people
                through design.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <AboutImage />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
