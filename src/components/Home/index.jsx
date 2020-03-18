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
      y: 0,
    
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
    return (
      <div
        className="titleContainer"
        onMouseMove={this._onMouseMove}
        ref="titleContainer"
        style={maskStyle}
      >
        <Container fluid>
          <Row className="home2">
            <NavBar />
            <Col>
              <div className="home">
                <h5 style={{ fontWeight: "regular" }}>Burak Sürmen</h5>
                <h1 style={{ fontWeight: "bold" }}>
                  Front end web application developer
                </h1>
                <h3 style={{ fontWeight: "lighter" }}>Based in Istanbul</h3>
                <a href="https://github.com/bsurmen">
                  <img src="/assets/Github.svg" />
                </a>
                <a href="https://www.linkedin.com/in/bsurmen/">
                  <img src="/assets/LinkedIN.svg" />
                </a>
                <a href="https://medium.com/@bsurmen">
                  <img src="/assets/Medium.svg" />
                </a>
              </div>
            </Col>
            <Col lg={6} xs={11}>
              <Working />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
