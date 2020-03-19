import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  state = { width: 1080, height: 0 };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const classNav =
      this.state.width > 769
        ? "flex-column navBarLeft navBarLeftAlign"
        : "justify-content-center navBarTop";
    return (
     
        <Nav defaultActiveKey="/" className={classNav}>
          <Nav.Link>
            <Link to="/about">
              <i className="fas fa-user"></i>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio" className="navBarTop">
              <i className="fas fa-chevron-left"></i>
              <i className="fas fa-chevron-right"></i>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/resume">
              <i className="fas fa-file-user"></i>
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contact">
              <i className="fas fa-envelope"></i>
            </Link>
          </Nav.Link>
        </Nav>
    
    );
  }
}

export default Navbar;
