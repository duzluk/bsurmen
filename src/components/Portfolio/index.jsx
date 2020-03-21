import React, { PropTypes } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomModal from "../common/modal";
import NavBar from "./../common/navBar";
import PortCard from "../common/customCard";
import "./style.css";

const Portfolio = props => {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataNum, setDataNum] = React.useState(0);

  const onEnter = e => {
    setDataNum(e);
    setModalShow(true);
  };

  const data = [
    {
      name: "Client Project",
      url: "/assets/client.png",
      urlModal: "/assets/client2.png",
      web: "#",
      code: "#",
      text: `Content will be ready in soon.`
    },
    {
      name: "Mentees and Mentors",
      web: "https://osamaakb.github.io/mentorship/",
      code: "https://github.com/bsurmen/mentorship",
      url: "/assets/mentees.png",
      urlModal: "/assets/mentees2.png",
      text: `Brings mentors and mentees together to learn and teach each other.\n
             + Implemented HTML5, CSS3 and Materialize to structure the home page and info modal.\n
              + Explored Firestore to create database.\n
             + Completed data fetching part to render user information on the page.\n
            + Fixed bugs that cause problem of the user experience.`
    },
    {
      name: `Abbuloka`,
      web: "https://abbuloka.netlify.com/",
      code: "https://github.com/bsurmen/abbulokapremium",
      url: "/assets/abbulokas.png",
      urlModal: "/assets/abbuloka.png",
      text: `An e-commercial website that promotes and sells the Bennu rocks pieces to the people. 
      (This is the first exercise project under web development Bootcamp as a team. Only HTML and CSS used in the project.)\n
            + Devised the project idea and designed UI.\n
            +Utilized Bootstrap 4 to create responsive page for use on different size of screens.\n
            + Created index page and footer through HTML5 and CSS3.`
    }
  ];

  return (
    <Container fluid>
      <Row>
        <NavBar />
        <Col>
          <Row className="projectAlign">
            <h1>projects</h1>
          </Row>
          <Row className="projectCenter">
            {data.map((e, i) => (
              <PortCard
                src={data[i].url}
                onClick={() => onEnter(i)}
                classStyle="portfolio"
              />
            ))}

            <CustomModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              onWeb={data[dataNum].web}
              onCode={data[dataNum].code}
              img={data[dataNum].urlModal}
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
