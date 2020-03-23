import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomModal from "../common/modal";
import NavBar from "../common/navBar";
import PortCard from "../common/customCard";
import { projectData } from "../../data";
import CursorProvider from "../../Providers/cursorProvider";
import "./style.css";

const Projects = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [dataNum, setDataNum] = React.useState(0);

  const onEnter = e => {
    setDataNum(e);
    setModalShow(true);
  };

  return (
    <CursorProvider>
      <Container fluid>
        <Row>
          <NavBar />
          <Col>
            <h2 id="projectTitle">projects</h2>

            <Row className="projectCenter">
              {projectData.map((e, i) => (
                <PortCard
                  src={projectData[i].url}
                  onClick={() => onEnter(i)}
                  classStyle="project"
                />
              ))}

              <CustomModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onWeb={projectData[dataNum].web}
                onCode={projectData[dataNum].code}
                img={projectData[dataNum].urlModal}
                text={projectData[dataNum].text}
                title={projectData[dataNum].name}
                header={projectData[dataNum].header}
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </CursorProvider>
  );
};

export default Projects;
