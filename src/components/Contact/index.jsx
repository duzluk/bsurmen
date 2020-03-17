import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../common/form";
import BackArrow from "../common/backArrow";
import ContactImage from "./contactImage";

const Contact = () => {
  return (
    <Container fluid>
      <BackArrow />
      <Row>
        <Col xs={6}>
          <ContactImage />
        </Col>
        <Col xs={6}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
