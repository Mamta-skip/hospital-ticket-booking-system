// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Register.css'; // Import the stylesheet

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleRegister = async () => {
    try {
   
      if (password !== confirmPassword) {
        alert('Password and confirm password do not match');
        
      
      }
  
      const response = await axios.post('http://localhost:3000/api/v1/users/register', {
        username: name,
        email,
        password,
        confirmPassword,
      });
  
      console.log('Registration successful:', response.data);
  
      // Show success message and navigate to login page
      alert('Registration successful. Please login.');
      navigate('/login');
    } catch (error) {
      // Handle error as before
    }
  };
  
  return (
    <div className="registerform">
      <Container className="register-container">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="formcontainer">
            <div className="register-form-controller">
              <h3>Register</h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex flex-column align-items-center justify-content-center mt-4">
                  <Button variant="success" onClick={handleRegister} className="register-button" style={{ backgroundColor: 'rgb(52 145 34)', color:'white' }} >
                    Register
                  </Button>
                </div>
                <div className="mt-3">
                  Already have an account? <NavLink to="/login">Login</NavLink>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
