import React from "react";
import { Row, Col } from "react-bootstrap";
import EmpCard from "../common/customCard2";
import { empTitle, empData, empLogo } from "../../data";

const Employment = () => {
  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {empData.map((e, i) => (
            <EmpCard
              title={empTitle[i]}
              text={empData[i]}
              srcOverlay={empLogo[i]}
              classStyle="new-line empCard containerOver"
              imgOverlayStyle="imgOverlayStyle"
              cardColor="empColor"
            />
          ))}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default Employment;
