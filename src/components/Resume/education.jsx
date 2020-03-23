import React from "react";
import { Row, Col } from "react-bootstrap";
import { eduTitle, eduData, eduLogo } from "../../data";
import EduCard from "../common/customCard2";

const Education = () => {
  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {eduData.map((e, i) => (
            <EduCard
              title={eduTitle[i]}
              text={eduData[i]}
              srcOverlay={eduLogo[i]}
              classStyle="new-line empCard containerOver"
              imgOverlayStyle="imgOverlayEdu"
            />
          ))}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default Education;
