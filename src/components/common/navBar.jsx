import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomCursor from "../../CustomCursor";
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
            <CustomCursor>
              <Link to="/">
                <i class="fal fa-long-arrow-left"></i>
              </Link>
            </CustomCursor>
            <CustomCursor>
              <Link to="/about">
                <i class="fal fa-address-card"></i>
              </Link>
            </CustomCursor>
            <CustomCursor>
              <Link to="/portfolio">
                <i class="fal fa-code"></i>
              </Link>
            </CustomCursor>
            <CustomCursor>
              <Link to="/resume">
                <i class="fal fa-file-user"></i>
              </Link>
            </CustomCursor>
            <CustomCursor>
              <Link to="/contact">
                <i class="fal fa-envelope"></i>
              </Link>
            </CustomCursor>
          </Nav>
        </div>
  
    );
  }
}

export default Navbar;
