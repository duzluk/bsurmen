import React from "react";
import { Row, Col } from "react-bootstrap";
import EduCard from "../common/customCard2";

const Education = () => {
  const eduData = [
    `Re:Coded Bootcamp (Flatiron School) - 2020\n
+ Front End Web Development, HTML, CSS, JavaScript, React
5 months long intense web development program run by Re:Coded 
using Flatiron School curriculum access.\n
Applied flip-class system and a lot of team projects during the Bootcamp.
`,
    `Anadolu University - Eskisehir, Turkey -  2020 - 2024\n
+ Degree: Management Information Systems

`,
    `Anadolu University - Eskisehir, Turkey -  2015 - 2017\n
+ Degree: Brand Communication

`,
    `Escola Superior de Artes e Design - Porto, Portugal -  2012 - 2013\n
+ Degree: Industrial Product Design

`,
    `Anadolu University - Eskisehir, Turkey -  2010 - 2015\n
+ Degree: Industrial Product Design

`
  ];

  const eduLogo = [
    "/assets/logo/recoded.png",
    "/assets/logo/anadolu.png",
    "/assets/logo/anadolu.png",
    "/assets/logo/esad.png",
    "/assets/logo/anadolu.png"
  ];

  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {eduData.map((e, i) => (
            <EduCard
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
