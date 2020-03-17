import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const contactForm = () => {
  return (
    <React.Fragment>
      <h1>Need some help?</h1>
      <h1>ping me</h1>
      <Form>
        <Row>
          <Col>
            <Form.Label>What is your name?</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Col>
        </Row>
        <h1>project stage</h1>
        {["radio"].map(type => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`Have product documentation or work in progress`}
            />

            <Form.Check
              type={type}
              label={`Project is already running (I have documentation or mockups etc.)`}
              id={`default-${type}`}
            />
          </div>
        ))}

        <Row>
          <Col>
            <Form.Label>What is your timeframe?</Form.Label>
            <Form.Control />
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Estimated budget?</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    </React.Fragment>
  );
};

export default contactForm;
