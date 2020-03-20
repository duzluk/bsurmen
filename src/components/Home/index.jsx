import React from "react";
import Working from "./homePageWorking";
import NavBar from "../common/navBar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  _onMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const Ox = (e.nativeEvent.offsetX / width) * 100;
    const Oy = (e.nativeEvent.offsetX / height) * 100;
    // console.log(Math.floor(Ox), Math.floor(Oy));
    this.setState({
      x: Ox,
      y: Oy
    });
  };

  render() {
    const { text } = this.props;
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y
    };

    const urlSocialMedia = [
      "https://github.com/bsurmen",
      "https://www.linkedin.com/in/bsurmen/",
      "https://medium.com/@bsurmen"
    ];

    const pathSocialIcon = [
      "/assets/Github.svg",
      "/assets/LinkedIN.svg",
      "/assets/Medium.svg"
    ];

    return (
      // <div
      //   className="titleContainer"
      //   onMouseMove={this._onMouseMove}
      //   ref="titleContainer"
      //   style={maskStyle}
      // >
      <Container fluid>
        <Row className="home2">
          <NavBar />
          <Col xs={12} md={5}>
            <div className="home">
              <h5 style={{ fontWeight: "400" }}>Burak Sürmen</h5>
              <h1 style={{ fontWeight: "600" }}>
                Front end web application developer
              </h1>
              <h3 style={{ fontWeight: "400", marginTop: "-8px" }}>
                Based in Istanbul
              </h3>

              {urlSocialMedia.map((e, i) => (
                <a href={urlSocialMedia[i]}>
                  <img src={pathSocialIcon[i]} />
                </a>
              ))}
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Working />
          </Col>
        </Row>
      </Container>
      // </div>
    );
  }
}

export default Home;
