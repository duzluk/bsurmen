import React from "react";
import Working from "./homePageWorking";
import NavBar from "../common/navBar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const home = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col xd={5}>
          <div className="home">
            <h5>Burak Sürmen</h5>
            <h1>Front end web application developer</h1>
            <h3>Based in Istanbul</h3>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-medium"></i>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <Working />
        </Col>
      </Row>
    </Container>
  );
};

export default home;
