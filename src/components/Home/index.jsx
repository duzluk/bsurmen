import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePageAnimate from "./homePageAnimate";
import NavBar from "../common/navBar";
import HomeTextContent from "./homeTextContent";
import "./style.css";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col xs={12} md={5}>
          <HomeTextContent />
        </Col>
        <Col md={6} xs={12}>
          <HomePageAnimate />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
