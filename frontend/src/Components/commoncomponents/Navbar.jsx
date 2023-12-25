// Navbar.jsx
import React from 'react';
import { Navbar, Nav,Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
  return (
    <Navbar bg="Sucess" expand="lg" variant="light">
      <Container>
      <Navbar.Brand href="#home">HealthCare</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" >
          
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/book">Book</Nav.Link>
          <Nav.Link as={NavLink} to="/login">Login/signup</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default Navbars;
