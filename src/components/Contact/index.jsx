import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "../common/form";
import BackArrow from "../common/backArrow";
import ContactImage from "./contactImage";
import NavBar from "./../common/navBar";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mail: "",
      timeFrame: "",
      budget: 0,
      msg: "",
      radio: ''
    };
  }

  handleName = name => {
    this.setState({
      name
    });
  };
  handleMail = mail => {
    this.setState({
      mail
    });
  };
  handleTimeFrame = timeFrame => {
    this.setState({
      timeFrame
    });
  };
  handleBudget = budget => {
    this.setState({
      budget
    });
  };
  handleMsg = msg => {
    this.setState({
      msg
    });
  };
  handleRadio = radio => {
    this.setState({
      radio
    });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <NavBar />

          <Col lg={5} xs={11}>
            <ContactImage />
          </Col>
          <Col lg={6} xs={11}>
            <Form
              handleName={this.handleName}
              handleMail={this.handleMail}
              handleTimeFrame={this.handleTimeFrame}
              handleBudget={this.handleBudget}
              handleMsg={this.handleMsg}
              handleRadio={this.handleRadio}
              name={this.state.name}
              mail={this.state.mail}
              timeFrame={this.state.timeFrame}
              budget={this.state.budget}
              msg={this.state.msg}
              radio={this.state.radio}
            />
          </Col>
          <BackArrow />
        </Row>
      </Container>
    );
  }
}

export default Contact;
