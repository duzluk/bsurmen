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
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.img} />
        <p className="new-line ">{props.text}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button href={props.onCode}>Github</Button>
        <Button href={props.onWeb}>Demo</Button>
      </Modal.Footer>
    </Modal>
  );
}
