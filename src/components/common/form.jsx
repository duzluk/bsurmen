import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";

const contactForm = ({
  handleForm,
  name,
  mail,
  timeFrame,
  budget,
  msg,
  radio
}) => {
  const handleOnChange = e => {};
  const handleInput = event => {
    handleForm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleForm(event.target.value);
  };

  return (
    <React.Fragment>
      <h1>Need some help?</h1>
      <h1>ping me</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>What is your name?</Form.Label>
            <Form.Control
              className="input"
              name="name"
              value={name}
              onChange={name => handleInput(name)}
            />
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Your email</Form.Label>
              <Form.Control
                type="email"
                name="mail"
                className="input"
                value={mail}
                onChange={mail => handleInput(mail)}
              />
            </Form.Group>
          </Col>
        </Row>
        <h1>project stage</h1>

        <RadioGroup
          name="stage"
          onChange={e => handleOnChange(e)}
          selectedValue={radio}
        >
          <div className="radio-button-background">
            <Radio value={radio} className="radio-button" />
            Have product documentation or work in progress
          </div>
          <div className="radio-button-background">
            <Radio value="radio2" className="radio-button" />
            Project is already running (I have documentation or mockups etc.)
          </div>
        </RadioGroup>

        <Row>
          <Col>
            <Form.Label>What is your timeframe?</Form.Label>
            <Form.Control
              className="input"
              name="timeFrame"
              value={timeFrame}
              onChange={timeFrame => handleInput(timeFrame)}
            />
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Estimated budget?</Form.Label>
              <Form.Control
                type="number"
                className="input"
                value={budget}
                onChange={budget => handleInput(budget)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add quick message here</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            name="msg"
            className="input"
            value={msg}
            onChange={msg => handleInput(msg)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send it
        </Button>
        <Form.Label>Are you done? Click the button!</Form.Label>
      </Form>
    </React.Fragment>
  );
};

export default contactForm;
