import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";

const navBar = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column navBarLeft">
      <Nav.Link href="/home">
        <i className="fas fa-user"></i>
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <i className="fas fa-cog"></i>
      </Nav.Link>
      <Nav.Link eventKey="link-2">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <i className="fas fa-envelope"></i>
      </Nav.Link>
    </Nav>
  );
};

export default navBar;
