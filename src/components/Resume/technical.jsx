import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../common/customCard";
import { techLogo } from "../../data";

const Technical = () => {
  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {techLogo.map((e, i) => (
            <CustomCard src={techLogo[i]} classStyle="logoCard" />
          ))}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default Technical;
