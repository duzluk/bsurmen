import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../common/form";
import BackArrow from "../common/backArrow";
import ContactImage from "./contactImage";
import NavBar from "./../common/navBar";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [budget, setBudget] = useState(0);
  const [msg, setMsg] = useState("");
  const [radio, setRadio] = useState(undefined);

  const handleForm = (name, mail, timeFrame, budget, msg, radio) => {
    setName(name);
    setMail(mail);
    setTimeFrame(timeFrame);
    setBudget(budget);
    setMsg(msg);
    setRadio(radio);
  };

  return (
    <Container fluid>
      <Row>
        <NavBar />

        <Col xs={5}>
          <ContactImage />
        </Col>
        <Col xs={6}>
          <Form
            handleForm={handleForm}
            name={name}
            mail={mail}
            timeFrame={timeFrame}
            budget={budget}
            msg={msg}
            radio={radio}
          />
        </Col>
        <BackArrow />
      </Row>
    </Container>
  );
};

export default Contact;
