import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";

const contactForm = ({
  handleName,
  handleMail,
  handleTimeFrame,
  handleBudget,
  handleMsg,
  handleRadio,
  handleForm,
  name,
  mail,
  timeFrame,
  budget,
  msg,
  radio
}) => {
  const handleNameInput = event => {
    handleName(event.target.value);
  };
  const handleMailInput = event => {
    handleMail(event.target.value);
  };
  const handleTimeFrameInput = event => {
    handleTimeFrame(event.target.value);
  };
  const handleBudgetInput = event => {
    handleBudget(event.target.value);
  };
  const handleMsgInput = event => {
    handleMsg(event.target.value);
  };
  const handleRadioInput = event => {
    handleRadio(event);
  };
  const handleSubmit = event => {
    event.preventDefault();

    alert(`dsf`);
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
              onChange={name => handleNameInput(name)}
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
                onChange={mail => handleMailInput(mail)}
              />
            </Form.Group>
          </Col>
        </Row>
        <h1>project stage</h1>

        <RadioGroup
          name="stage"
          onChange={e => handleRadioInput(e)}
          selectedValue={radio}
        >
          <label>
            <Radio value="radio" className="radio-button" /> Have product
            documentation or work in progress
          </label>
          <label>
            <Radio value="radio2" className="radio-button" /> Project is already
            running (I have documentation or mockups etc.)
          </label>
        </RadioGroup>

        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Form.Label>What is your timeframe?</Form.Label>
            <Form.Control
              className="input"
              name="timeFrame"
              value={timeFrame}
              onChange={timeFrame => handleTimeFrameInput(timeFrame)}
            />
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Estimated budget?</Form.Label>
              <Form.Control
                type="number"
                className="input"
                value={budget}
                onChange={budget => handleBudgetInput(budget)}
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
            onChange={msg => handleMsgInput(msg)}
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          Send it
        </Button>
        <Form.Label style={{ marginLeft: "2rem" }}>
          Are you done? Click the button!
        </Form.Label>
      </Form>
    </React.Fragment>
  );
};

export default contactForm;
