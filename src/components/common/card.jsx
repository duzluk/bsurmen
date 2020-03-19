import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ text, src }) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
