import React from "react";
import { Nav, Row, Col, Tab } from "react-bootstrap";

const Tabs = ({
  tabName1,
  tabName2,
  tabName3,
  content1,
  content2,
  content3
}) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12} md={3}>
          <Nav variant="pills" className="flex-column resume" >
            <Nav.Item>
              <Nav.Link eventKey="first">{tabName1}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">{tabName2}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">{tabName3}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12} md={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">{content1}</Tab.Pane>
            <Tab.Pane eventKey="second">{content2}</Tab.Pane>
            <Tab.Pane eventKey="third">{content3}</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Tabs;
