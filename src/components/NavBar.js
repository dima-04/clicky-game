import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar(props) {
  return (
    <Navbar expand="lg" bg="info" variant="info">
      <h2>Clicky Game</h2>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <h4>Click an image to begin!</h4>
        </Nav>
        <h4>
          Score: {props.score} | Top Score: {props.topScore}
          </h4>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;