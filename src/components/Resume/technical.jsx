import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoCard from "../common/customCard";

const Technical = (props) => {
  const src = [
    "/assets/logo/js.png",
    "/assets/logo/dart.png",
    "/assets/logo/react.png",
    "/assets/logo/flutter.png",
    "/assets/logo/html.png",
    "/assets/logo/css.png",
    "/assets/logo/git.png",
    "/assets/logo/firebase.png",
    "/assets/logo/figma.png",
    "/assets/logo/xd.png",
    "/assets/logo/photoshop.png",
    "/assets/logo/illustrator.png",
    "/assets/logo/rhino.png"
  ];
  return (
    <React.Fragment>
      <Row>
        {src.map((e, i) => (
          <LogoCard src={src[i]} classStyle="logoCard" onEnter={onEnter} />
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Technical;

const onEnter = () => {
 console.log('fdsfasdfas');
 
}
 