import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ABC Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavLink className="nav-link Navitems" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link Navitems" to="/location" >
              Location
            </NavLink>
            <NavLink className="nav-link Navitems" to="/book" >
              Book Ticket
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav-link Navitems" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link Navitems" to="/register" >
              Signup
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
