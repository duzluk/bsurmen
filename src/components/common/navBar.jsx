import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

class Navbar extends React.Component {
  state = { width: window.innerWidth };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const wrapper =
      this.state.width > 769 ? "wrapperVertical" : "wrapperHorizantal";
    const classNav =
      this.state.width > 769
        ? "flex-column navBarLeft navBarLeftAlign"
        : "justify-content-center navBarTop";
    return (
      <div className={wrapper}>
        <Nav defaultActiveKey="/" className={classNav}>
          <Link to="/about">
            <i className="fas fa-user"></i>
          </Link>

          <Link to="/portfolio">
            <i class="far fa-code"></i>
          </Link>

          <Link to="/resume">
            <i className="fas fa-file-user"></i>
          </Link>

          <Link to="/contact">
            <i className="fas fa-envelope"></i>
          </Link>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
