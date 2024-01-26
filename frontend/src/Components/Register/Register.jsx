import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        console.error('Password and confirm password do not match');
        return;
      }

      const response = await axios.post('http://localhost:3000/api/v1/users/register', {
        username: name,
        email,
        password,
        confirmPassword,
      });

      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        console.error('No response received from the server');
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <Container className="register-container">
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
              placeholder="Ex. james@bond.com"
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
            <Button variant="primary" onClick={handleRegister} className="register-button" as={NavLink} to="/login">
              Register
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
