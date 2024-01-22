import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Assuming you have a login function that communicates with your backend
    // This is where you can make a POST request to your login endpoint
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Login successful, you might want to redirect or perform other actions
        console.log('Login successful!');
        // Redirect or perform other actions as needed
      } else {
        // Login failed, handle errors
        console.error('Login failed:', response.statusText);
        // Handle error, display error message, etc.
      }
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error, display error message, etc.
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2>Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>

            <p className="mt-3">
              Don't have an account? <Link to="/register">Register here</Link>.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
