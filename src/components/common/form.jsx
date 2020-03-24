import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import CustomCursor from "../../CustomCursor";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState("");
  const [radio, setRadio] = useState("");
  const [msg, setMsg] = useState("");
  const [validated, setValidated] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value);
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "timeframe") {
      setTimeframe(e.target.value);
    }
    if (e.target.id === "budget") {
      setBudget(e.target.value);
    }
    if (e.target.id === "havePro") {
      setRadio(
        e.target.value + "Have product documentation or work in progres"
      );
    }
    if (e.target.id === "haveDoc") {
      setRadio(
        e.target.value +
          "Project is already running (I have documentation or mockups etc.)"
      );
    }
    if (e.target.id === "msg") {
      setMsg(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log("handleSubmit");
    const dataToSubmit = {
      name,
      email,
      timeframe,
      budget,
      radio,
      msg
    };

    console.log(dataToSubmit);

    axios
      .post("/api/sendEmail", dataToSubmit)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <h1>Need some help?</h1>
      <h1>ping me</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>What is your name?</Form.Label>
              <Form.Control
                className="input"
                value={name}
                onChange={handleClick}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Your email</Form.Label>
              <Form.Control
                type="email"
                className="input"
                value={email}
                onChange={handleClick}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <h1>project stage</h1>
        <Form.Group>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Have product
              documentation or work in progres"
              name="formHorizontalRadios"
              id="havePro"
              onClick={handleClick}
            />
            <Form.Check
              type="radio"
              label="Project is
              already running (I have documentation or mockups etc.)"
              name="formHorizontalRadios"
              id="haveDoc"
              onClick={handleClick}
            />
          </Col>
        </Form.Group>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Form.Group controlId="timeframe">
              <Form.Label>What is your timeframe?</Form.Label>
              <Form.Control
                required
                className="input"
                value={timeframe}
                onChange={handleClick}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="budget">
              <Form.Label>Estimated budget?</Form.Label>
              <Form.Control
                required
                type="number"
                className="input"
                value={budget}
                onChange={handleClick}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="msg">
          <Form.Label>Add quick message here</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows="3"
            className="input"
            value={msg}
            onChange={handleClick}
          />
        </Form.Group>
        <CustomCursor>
          <Button variant="danger" type="submit" onClick={handleSubmit}>
            Send it
          </Button>
        </CustomCursor>
        <Form.Label style={{ marginLeft: "2rem" }}>
          Are you done? Click the button!
        </Form.Label>
      </Form>
    </React.Fragment>
  );
};

export default ContactForm;
//  <RadioGroup
//             onChange={handleClick}
//             value={radio}
//             selectedValue={radio}
//           >
//             <label>
//               <Radio value="radio1" className="radio-button" /> Have product
//               documentation or work in progress
//             </label>
//             <label>
//               <Radio value="radio2" className="radio-button" /> Project is
//               already running (I have documentation or mockups etc.)
//             </label>
//           </RadioGroup>
