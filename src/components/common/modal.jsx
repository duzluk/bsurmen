import React from "react";
import { Modal, Button } from "react-bootstrap";
import CustomCursor from "../common/customCursor";

export default function customModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <CustomCursor>
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="modalTitle"
          >
            {props.title}
          </Modal.Title>
        </Modal.Header>
      </CustomCursor>
      <Modal.Body>
        <img src={props.img} className="modalImg" alt="project images" />
        <h6 className="modalTextHeader">{props.header}</h6>
        <p className="new-line modalText">{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <CustomCursor>
          <Button href={props.onCode}>Github</Button>
        </CustomCursor>
        <CustomCursor>
          <Button href={props.onWeb}>Demo</Button>
        </CustomCursor>
      </Modal.Footer>
    </Modal>
  );
}
