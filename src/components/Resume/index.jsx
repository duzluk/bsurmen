import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "../common/tabs";
import BackArrow from "../common/backArrow";
import Education from "./education";
import Technical from "./technical";
import NavBar from "./../common/navBar";
import Employment from "./employment";

const Resume = props => {
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col>
          <Row>
            <h1>Resume Page</h1>
            <BackArrow />
          </Row>
          <Tabs
            tabName1="Education"
            tabName2="Technical Skills"
            tabName3="Employment History"
            content1={<Education />}
            content2={<Technical />}
            content3={<Employment />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
