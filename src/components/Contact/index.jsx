import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../common/form";
import ContactImage from "./contactImage";
import NavBar from "./../common/navBar";
import CursorProvider from "../../Providers/cursorProvider";

import "./style.css";

const Contact = () => {
  return (
    <CursorProvider>
      <Container fluid>
        <Row>
          <NavBar />
          <Col id="contactAlign">
            <Row id="contactAlign2">
              <Col md={5} xs={12}>
                <ContactImage />
              </Col>
              <Col md={6} xs={12}>
                <Form />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </CursorProvider>
  );
};

export default Contact;
