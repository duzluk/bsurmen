import React from "react";
import Working from "./homePageWorking";
import NavBar from "../common/navBar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

const home = () => {
  return (
    <Container fluid>
      <Row className="home2">
        <NavBar />
        <Col>
          <div className="home">
            <h5 style={{ fontWeight: "regular" }}>Burak Sürmen</h5>
            <h1 style={{ fontWeight: "bold" }}>
              Front end web application developer
            </h1>
            <h3 style={{ fontWeight: "lighter" }}>Based in Istanbul</h3>
            <i className="fab fa-github"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-medium"></i>
          </div>
        </Col>
        <Col lg={6} xs={12}>
          <Working />
        </Col>
      </Row>
    </Container>
  );
};

export default home;
