import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../common/form";
import BackArrow from "../common/backArrow";
import ContactImage from "./contactImage";
import NavBar from "./../common/navBar";

const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <NavBar />

        <Col xs={5}>
          <ContactImage />
        </Col>
        <Col xs={6}>
          <Form />
        </Col>
        <BackArrow />
      </Row>
    </Container>
  );
};

export default Contact;
