import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomModal from "../common/modal";
import BackArrow from "../common/backArrow";
import NavBar from "./../common/navBar";
import Cards from "../common/card";

const Portfolio = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const content = {
    src1: "/assets/mentees.png",
    src2: "/assets/abbuloka.png",
    text1: ` Mentorship - Github | Demo 
            Brings mentors and mentees together to learn and teach each other.
             + Implemented HTML5, CSS3 and Materialize to structure the
            home page and info modal.
              + Explored Firestore to create database.
             + Completed data fetching part to render user information on
            the page.
            + Fixed bugs that cause problem of the user experience.`,
    text2: `Abbuloka - Github | Demo 
            An e-commercial website that promotes and sells the Bennu rocks
            pieces to the people. (This is the first exercise project under web
            development Bootcamp as a team. Only HTML and CSS used in the
            project.)+ Devised the project idea and designed UI. +
            Utilized Bootstrap 4 to create responsive page for use on different
            size of screens.  + Created index page and footer through
            HTML5 and CSS3.`
  };
  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col>
          <Row>
            <h1>Portfolio Page</h1>
            <BackArrow />
            <Button variant="danger" onClick={() => setModalShow(true)}>
              <Cards src={content.src1} text={content.text1} />
              <Cards src={content.src2} text={content.text2} />
            </Button>

            <CustomModal show={modalShow} onHide={() => setModalShow(false)} img={content.src1} text={content.text1}/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
