import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./../common/navBar";
import AboutImage from "./aboutImage";
import Typing, { Backspace, Delay, Reset, Speed } from "react-typing-animation";
import { useSpring, animated as a, interpolate } from "react-spring";
import "./style.css";

const About = () => {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const interpBg = xy.interpolate(
    (x, y) =>
      `perspective(600px) rotateY(${x / 60}deg) rotateX(${-y /
        60}deg) translate3d(-10%, -10%, 0)`
  );
  const interpFace = st.interpolate(o => `translate(90,${105 + o / 4})`);
  const interpEye = interpolate(
    [st, xy],
    (o, xy) =>
      `translate(${xy[0] / 20 + 140},${xy[1] / 10 + 50 + o / 2}) scale(0.1)`
  );
  const interpIris = interpolate(
    [st, xy],
    (o, xy) => `translate(${xy[0] / 30},${xy[1] / 30 + -10 + o / 8})`
  );
  const interpPupil = interpolate(
    [st, xy],
    (o, xy) => `translate(${xy[0] / 25},${xy[1] / 25 + -10 + o / 8})`
  );
  const interpSpot = interpolate(
    [st, xy],
    (o, xy) => `translate(${8 + -xy[0] / 80},${-xy[1] / 80 + -10 + o / 8})`
  );
  const interpMouth = interpolate(
    [st, xy],
    (o, xy) =>
      `translate(${xy[0] / 18 + 188},${xy[1] / 20 + 230 + o / 1.7}) scale(0.8)`
  );
  const interpHair = st.interpolate(o => `translate(79,${o / 4})`);
  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), []);

  const AnimatedTypingComponent = () => (
    <Typing style={{ height: "30px" }} speed="50">
      <h2 style={{ fontSize: "50px" }}>
        My name is Burak. I’m a front end web developer familiar with JavaScript
        frameworks.
      </h2>
    </Typing>
  );

  return (
    <div onMouseMove={onMove} onScroll={onScroll}>
      <Container fluid className="about">
        <Row>
          <NavBar />
          <Col>
            <h2 className="pageTitle">about me</h2>
            <Row>
              <Col xs={12} md={5}>
                <AboutImage  />
              </Col>
              <Col xs={12} md={5}>
                <h4>Hey there!</h4>
                <h1 className="aboutBold">
                  I’m a front end web developer familiar with JavaScript
                  frameworks.
                </h1>
                <h6>
                  Studying design gave me a good understanding with learning new
                  concepts and thinking methodologically, a skill that
                  translates beautifully to writing code. I am excited to connect
                  people through technology after having experience connecting
                  people through design.
                </h6>
                <h6 id="aboutContact" className="aboutBold">
                  Interested in working together? <br />
                  Feel free to contact me for any project or collaboration.
                </h6>
                <Link to="/contact">
                  <Button variant="danger">Contact me</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
