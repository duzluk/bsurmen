import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EmpCard from "../common/customCard2";

const Employment = () => {
  const title = [
    "Re:Coded, Istanbul, Turkey Developer, Dec 2019 - Current",
    "Freelancer, Istanbul, Turkey Designer, April 2018 - September 2019",
    "Box Butik, Eskisehir, Turkey Product Manager and Industrial Designer, Sep 2015 - March 2018",
    "Dreiform GmbH, Cologne, Germany Industrial Product Designer (Internship), June 2014 - Sep 2014"
  ];

  const empData = [
    `\n
+ Generated 2D and 3D conceptual ideas that sorted out clients’ needs.\n
+ Provided technical drawing of the product for manufacturing.\n
+ Designed corporate identity work helped to increase recognizability of the brands. 
`,
    `\n
+ Generated 2D and 3D conceptual ideas that sorted out clients’ needs.\n
+ Provided technical drawing of the product for manufacturing.\n
+ Designed corporate identity work helped to increase recognizability of the brands. 
`,
    `\n
+ Devised customized cardboard products that target customers’ needs.\n
+ Leaded production team to manufacture the final product with the lowest fault tolerance.\n
+ Set up production planning to deliver products to customers on time.
`,
    `\n
+ Contributed to the design team for ongoing projects’ concept development to generate ideas.\n
+ Leaded workshop department to build 1-to-1 product prototypes to demonstrate the concepts.\n
+ Modeled connector pieces used in production and printed objects on using 3D printers. `
  ];

  const empLogo = [
    "/assets/logo/recodedd.png",
    "/assets/logo/freelancer.png",
    "/assets/logo/boxbutik.png",
    "/assets/logo/dreiform.png"
  ];

  return (
    <React.Fragment>
      <Col xs={8}>
        <Row>
          {empData.map((e, i) => (
            <EmpCard
              title={title[i]}
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
