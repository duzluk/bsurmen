import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "../common/tabs";
import Education from "./education";
import Technical from "./technical";
import NavBar from "./../common/navBar";
import Employment from "./employment";
import CursorProvider from "../../Providers/cursorProvider";
import "./style.css";

const Resume = () => {
  return (
    <CursorProvider>
      <Container fluid className="resume">
        <Row>
          <NavBar />
          <div className="navFixer"></div>
          <Col xs={12} md={11}>
            <h2 className="pageTitle">resume</h2>
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
    </CursorProvider>
  );
};

export default Resume;
