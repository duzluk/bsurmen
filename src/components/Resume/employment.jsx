import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpCard from "../common/customCard";

const Employment = () => {
  const empData = [
    `Freelancer, Istanbul, Turkey\n
Designer, April 2018 - September 2019\n
+ Generated 2D and 3D conceptual ideas that sorted out clients’ needs.\n
+ Provided technical drawing of the product for manufacturing.\n
+ Designed corporate identity work helped to increase recognizability of the brands. 
`,
    `Box Butik, Eskisehir, Turkey\n
Product Manager and Industrial Designer, Sep 2015 - March 2018\n
+ Devised customized cardboard products that target customers’ needs.\n
+ Leaded production team to manufacture the final product with the lowest fault tolerance.\n
+ Set up production planning to deliver products to customers on time.
`,
    `Dreiform GmbH, Cologne, Germany\n
Industrial Product Designer (Internship), June 2014 - Sep 2014\n
+ Contributed to the design team for ongoing projects’ concept development to generate ideas.\n
+ Leaded workshop department to build 1-to-1 product prototypes to demonstrate the concepts.\n
+ Modeled connector pieces used in production and printed objects on using 3D printers.
`,
    `Hammam Radiator, Eskisehir, Turkey\n
Industrial Product Designer (Internship), June 2014 - Sep 2014\n
+ Created 3D models to test heat flows and efficiency on hydronic radiators.\n
+ Generated stainless steel radiator and electric towel rail concepts for customers’ needs.\n
+ Monitored metal processing technology techniques to apply on establishing new design approaches.
`,
    `NG Kütahya Ceramic, Kutahya, Turkey\n
Industrial Product Designer (Project Based Internship), June 2013 - Sep 2013\n
+ Explored the mass manufacturing process of ceramic tiles to adapt 3D tile concepts to production.\n
+ Illustrated new tile pattern concepts for a collection to be exhibited at the CERSAIE fair in Bologna, Italy.\n
+ Visualized 3D tiles and usage areas to display the design notion to the target customers.
`
  ];

  const empLogo = [
    "/assets/logo/boxbutik.png",
    "/assets/logo/boxbutik.png",
    "/assets/logo/dreiform.png",
    "/assets/logo/hammam.png",
    "/assets/logo/kutahya.png"
  ];

  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {empData.map((e, i) => (
            <EmpCard
              text={empData[i]}
              srcOverlay={empLogo[i]}
              classStyle="new-line empCard containerOver"
              imgOverlayStyle="imgOverlayStyle"
            />
          ))}
        </Row>
      </Col>
    </React.Fragment>
  );
};

export default Employment;
