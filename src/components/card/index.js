import React from "react";
import { Image, Col, Button } from "react-bootstrap";
import "./style.css";

function Card(props) {
  return (
    <Col xs={6} md={3}>
      <Button variant="outline-light" onClick={props.onClick} data-id={props.image.id}>
        <Image className="image" src={props.image.URL} data-id={props.image.id} thumbnail />
      </Button>
    </Col>
  );
}

export default Card;
