import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import CustomCursor from "../../CustomCursor";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [budget, setBudget] = useState("");
  const [radio, setRadio] = useState("");
  const [msg, setMsg] = useState("");
  // const [validated, setValidated] = useState(false);

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
    <div id="form">
      <h2 className="font-weight-bold">
        Need some help? <br /> ping me
      </h2>

      <Form noValidate onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>What is your name?</Form.Label>
              <CustomCursor>
                <Form.Control
                  className="input"
                  value={name}
                  onChange={handleClick}
                  required
                />
              </CustomCursor>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Your email</Form.Label>
              <CustomCursor>
                <Form.Control
                  type="email"
                  className="input"
                  value={email}
                  onChange={handleClick}
                  required
                />
              </CustomCursor>
            </Form.Group>
          </Col>
        </Row>
        <h4>project stage</h4>
        <Form.Group>
          <Col sm={10}>
            <CustomCursor>
              <Form.Check
                type="radio"
                label="Have product
              documentation or work in progres"
                name="formHorizontalRadios"
                id="havePro"
                onClick={handleClick}
              />
            </CustomCursor>
            <CustomCursor>
              <Form.Check
                type="radio"
                label="Project is
              already running (I have documentation or mockups etc.)"
                name="formHorizontalRadios"
                id="haveDoc"
                onClick={handleClick}
              />
            </CustomCursor>
          </Col>
        </Form.Group>
        <Row style={{ marginTop: "2rem" }}>
          <Col>
            <Form.Group controlId="timeframe">
              <Form.Label>What is your timeframe?</Form.Label>
              <CustomCursor>
                <Form.Control
                  required
                  className="input"
                  value={timeframe}
                  onChange={handleClick}
                />
              </CustomCursor>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="budget">
              <Form.Label>Estimated budget?</Form.Label>
              <CustomCursor>
                <Form.Control
                  required
                  type="number"
                  className="input"
                  value={budget}
                  onChange={handleClick}
                />
              </CustomCursor>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="msg">
          <Form.Label>Add quick message here</Form.Label>
          <CustomCursor>
            <Form.Control
              required
              as="textarea"
              rows="3"
              className="input"
              value={msg}
              onChange={handleClick}
            />
          </CustomCursor>
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
    </div>
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
