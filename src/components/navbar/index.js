import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './style.css';

function NavBar(props) {
  return (
    <Navbar fixed="top" expand="lg" bg="info" variant="info">
      <h2>Clicky Game</h2>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={"mx-auto " + props.className}>
          <h4>{props.message}</h4>
        </Nav>
        <h4>
          Score: {props.score} | Top Score: {props.topScore}
        </h4>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;