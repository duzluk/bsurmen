import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Working from "./components/Home/homePageWorking";
import NavBar from "./components/common/navBar";
import { Container, Row, Col } from "react-bootstrap";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Container fluid>
          <Row>
            <NavBar />
            <Col xd={5}>
              <Home />
            </Col>
            <Col md={6} xs={12}>
              <Working />
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
