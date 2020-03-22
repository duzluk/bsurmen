import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function customModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modalTitle">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} className="modalImg" />
        <h6 className="modalTextHeader">{props.header}</h6>
        <p className="new-line modalText">{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button href={props.onCode}>Github</Button>
        <Button href={props.onWeb}>Demo</Button>
      </Modal.Footer>
    </Modal>
  );
}
