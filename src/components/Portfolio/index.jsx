import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomModal from "../common/modal";
import BackArrow from "../common/backArrow";
import NavBar from "./../common/navBar";
import PortCard from "../common/customCard";

const Portfolio = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataNum, setDataNum] = React.useState(0);

  const onEnter = e => {
    setDataNum(e);
    setModalShow(true);
  };

  const data = [
    {
      id: 1,
      name: "Client Project",
      url: "/assets/mentees.png",
      text: `Mentorship - Github | Demo 
            Brings mentors and mentees together to learn and teach each other.
             + Implemented HTML5, CSS3 and Materialize to structure the
            home page and info modal.
              + Explored Firestore to create database.
             + Completed data fetching part to render user information on
            the page.
            + Fixed bugs that cause problem of the user experience.`
    },
    {
      id: 1,
      name: "Mentees & Mentors",
      url: "/assets/mentees.png",
      text: `Mentorship - Github | Demo 
            Brings mentors and mentees together to learn and teach each other.
             + Implemented HTML5, CSS3 and Materialize to structure the
            home page and info modal.
              + Explored Firestore to create database.
             + Completed data fetching part to render user information on
            the page.
            + Fixed bugs that cause problem of the user experience.`
    },
    {
      id: 3,
      name: "Abbuloka",
      url: "/assets/abbuloka.png",
      text: `Abbuloka - Github | Demo 
            An e-commercial website that promotes and sells the Bennu rocks
            pieces to the people. (This is the first exercise project under web
            development Bootcamp as a team. Only HTML and CSS used in the
            project.)+ Devised the project idea and designed UI. +
            Utilized Bootstrap 4 to create responsive page for use on different
            size of screens.  + Created index page and footer through
            HTML5 and CSS3.`
    }
  ];

  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col>
          <Row>
            <h1>Portfolio Page</h1>
            <BackArrow />

            {data.map((e, i) => (
              <PortCard
                src={data[i].url}
                text={data[i].text}
                onClick={() => onEnter(igit )}
              />
            ))}

            <CustomModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              img={data[dataNum].url}
              text={data[dataNum].text}
              title={data[dataNum].name}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
