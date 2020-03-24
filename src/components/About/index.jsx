import React, { useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./../common/navBar";
import AboutImage from "./aboutImage";
import AboutTextContent from "./aboutTextContent";
import CursorProvider from "../../Providers/cursorProvider";
import CustomCursor from "../../CustomCursor";
import { useSpring } from "react-spring";
import "./style.css";

const About = () => {
  const [{ xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
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

  return (
    <CursorProvider>
      <div onMouseMove={onMove} onScroll={onScroll}>
        <Container fluid className="about">
          <Row>
            <NavBar />
            <Col>
              <h2 className="pageTitle">about</h2>
              <Row className="about">
                <Col xs={6} md={5} className="aboutImg">
                  <AboutImage moveSetting={moveSetting} />
                </Col>
                <Col xs={12} md={5}>
                  <AboutTextContent />
                  <CustomCursor>
                    <Link to="/contact">
                      <Button variant="danger">Contact me</Button>
                    </Link>
                  </CustomCursor>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </CursorProvider>
  );
};

export default About;
