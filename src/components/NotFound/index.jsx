import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomCursor from "../common/customCursor";
import CursorProvider from "../../Providers/cursorProvider";
import { Link } from "react-router-dom";
import Cactus from "./cactus";
import "./style.css";

const NotFound = () => {
  return (
    <CursorProvider>
      <Row className="notFound">
        <Col  xs={6} id="cactus">
          <Cactus />
        </Col>
        <Col xs={6}>
          <h1 className="font-weight-bold">Oops...</h1>
          <h5>
            We can’t find the page you are looking for.
            <br /> May be the page is moved or deleted.
          </h5>
          <CustomCursor>
            <Link to="/">
              <Button variant="danger">Go back to Home</Button>
            </Link>
          </CustomCursor>
        </Col>
      </Row>
    </CursorProvider>
  );
};

export default NotFound;
