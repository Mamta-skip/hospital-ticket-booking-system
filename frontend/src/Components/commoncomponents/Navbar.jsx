// Navbars.js
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Navbar.css';
import { userIsAdmin } from '../../authutils';

function Navbars() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" className="Navitems">
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#a50e58', fontWeight: 'bolder', fontSize: '30px', textTransform: 'none' }}>
          ABC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link item" style={{ color: '#84cc16', fontWeight: 'bold' }} to="/">
              Home
            
            </NavLink>
            {isAuthenticated &&(
            <NavLink className="nav-link" to="/book" style={{ color: '#84cc16', fontWeight: 'bold' }}>
              Book Ticket
            </NavLink>
              )}
            {userIsAdmin() && (
              <NavLink className="nav-link" to="/create" style={{ color: '#84cc16', fontWeight: 'bold' }}>
                createtimeschedule
              </NavLink>
            )}
          </Nav>
          <Nav>
            {!isAuthenticated ? (
              <>
                <NavLink className="nav-link" to="/login" style={{ color: '#84cc16', fontWeight: 'bold' }}>
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register" style={{ color: '#84cc16', fontWeight: 'bold' }}>
                  Signup
                </NavLink>
              </>
            ) : (
              <>
              <NavLink className="nav-link" to="/dashboard" style={{ color: '#84cc16', fontWeight: 'bold' }}>
              Userprofile
            </NavLink>
              <button className="nav-link" onClick={logout} style={{ color: '#84cc16', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer' }}>
                Logout
              </button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
