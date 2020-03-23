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
  const moveSetting = xy.interpolate(
    (x, y) =>
      `perspective(600px) rotateY(${x / 60}deg) rotateX(${-y /
        60}deg) translate3d(-10%, -10%, 0)`
  );

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), []);

  const AnimatedTypingComponent = () => (
    <Typing style={{ height: "30px" }} speed="80">
      <h5
        className="font-weight-bold"
        style={{
          fontSize: "50px"
        }}
      >
        I'm Burak. I’m a front end web developer familiar with JavaScript
        frameworks.
      </h5>
    </Typing>
  );

  return (
    <div onMouseMove={onMove} onScroll={onScroll}>
      <Container fluid>
        <Row>
          <NavBar />
          <Col>
            <h2 className="pageTitle">about</h2>
            <Row className="about">
              <Col xs={6} md={5} className="aboutImg">
                <AboutImage moveSetting={moveSetting} />
              </Col>
              <Col xs={12} md={5}>
                <h4 style={{ fontSize: "40px" }}>Hey there!</h4>
                <h2
                  style={{
                    fontSize: "50px"
                  }}
                  className="font-weight-bold"
                >
                  <h5
                    className="font-weight-bold"
                    style={{
                      fontSize: "50px"
                    }}
                  >
                    I'm Burak. I’m a front end web developer familiar with
                    JavaScript frameworks.
                  </h5>
                </h2>
                <h5>
                  Studying design gave me a good understanding with learning new
                  concepts and thinking methodologically, a skill that
                  translates beautifully to writing code.I am excited to connect
                  people through technology after having experience connecting
                  people through design.
                </h5>
                <h4 className="font-weight-bold">
                  Interested in working together? <br />
                  Feel free to contact me for any project or collaboration.
                </h4>
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
