import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedback: "", name: "Name", email: "email@example.com" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ feedback: event.target.value });
  }
  // handleNameInput = event => {
  //   this.props.handleName(event.target.value);
  // };
  // handleMailInput = event => {
  //   this.props.handleMail(event.target.value);
  // };
  // handleTimeFrameInput = event => {
  //   this.props.handleTimeFrame(event.target.value);
  // };
  // handleBudgetInput = event => {
  //   this.props.handleBudget(event.target.value);
  // };
  // handleMsgInput = event => {
  //   this.props.handleMsg(event.target.value);
  // };
  // handleRadioInput = event => {
  //   this.props.handleRadio(event);
  // };

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user
    } = this.props.env;

    this.sendFeedback(
      template,
      this.props.senderEmail,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
    window.emailjs
      .send(
        "default_service", // default email provider in your EmailJS account
        templateId,
        {
          senderEmail,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({ formEmailSent: true });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }


  render() {
    return (
      <React.Fragment>
        <h1>Need some help?</h1>
        <h1>ping me</h1>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Label>What is your name?</Form.Label>
              <Form.Control
                className="input"
                value={this.state.feedback}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="email"
                  name="mail"
                  className="input"
                  value={this.state.feedback}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <h1>project stage</h1>

          <RadioGroup
            name="stage"
            onChange={this.handleChange}
            value={this.state.feedback}
            selectedValue={this.props.radio}
          >
            <label>
              <Radio value="radio1" className="radio-button" /> Have product
              documentation or work in progress
            </label>
            <label>
              <Radio value="radio2" className="radio-button" /> Project is
              already running (I have documentation or mockups etc.)
            </label>
          </RadioGroup>

          <Row style={{ marginTop: "2rem" }}>
            <Col>
              <Form.Label>What is your timeframe?</Form.Label>
              <Form.Control
                className="input"
                name="timeFrame"
                value={this.state.feedback}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Estimated budget?</Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={this.state.feedback}
                  onChange={this.handleChange}
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
              value={this.state.feedback}
              onChange={this.handleChange}
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
  }
}

export default ContactForm;
