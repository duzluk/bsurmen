import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const navBar = () => {
  return (
    <Nav defaultActiveKey="/" className="flex-column navBarLeft">
      <Nav.Link>
        <Link to="/about">
          <i className="fas fa-user"></i>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/resume">
          <i className="fas fa-cog"></i>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/portfolio">
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-right"></i>
        </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/contact">
          <i className="fas fa-envelope"></i>
        </Link>
      </Nav.Link>
    </Nav>
  );
};

export default navBar;
