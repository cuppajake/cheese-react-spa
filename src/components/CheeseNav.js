import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const CheeseNav = () => (
  <Navbar>
    <Nav>
      {/* exact prop means "exact match" since all other subpaths match "/" */}
      <LinkContainer exact to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/menus">
        <Nav.Link>Menus</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/cheeses">
        <Nav.Link>Cheeses</Nav.Link>
      </LinkContainer>
      <LinkContainer exact to="/categories">
        <Nav.Link>Categories</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
);

export default CheeseNav;