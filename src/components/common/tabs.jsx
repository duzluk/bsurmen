import React from "react";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import CustomCursor from "../../CustomCursor";

const Tabs = ({
  tabName1,
  tabName2,
  tabName3,
  content1,
  content2,
  content3
}) => {
  const options = ["first", "second", "third"];
  const tabs = [tabName1, tabName2, tabName3];
  const contents = [content1, content2, content3];

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={12} md={3}>
          <Nav variant="pills" className="flex-column">
            {options.map((e, i) => (
              <Nav.Item className="resume">
                <CustomCursor>
                  <Nav.Link eventKey={options[i]} className="font-weight-bold">
                    {tabs[i]}
                  </Nav.Link>
                </CustomCursor>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={12} md={9}>
          <Tab.Content>
            {options.map((e, i) => (
              <Tab.Pane eventKey={options[i]} unmountOnExit={true}>
                {contents[i]}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Tabs;
