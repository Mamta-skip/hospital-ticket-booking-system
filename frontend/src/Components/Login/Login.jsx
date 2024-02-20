// import React, { useState } from 'react';
// import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/v1/users/login', {
//         email,
//         password,
//       });

//       // Assuming the server response includes a 'token' property
//       const token = response.data.token;

//       // Store the token in local storage
//       localStorage.setItem('token', token);

//       // Optionally, store user email or other information
//       localStorage.setItem('user', response.data.email);

//       console.log('Login successful:', response.data);
//       navigate("/");
//     } catch (error) {
//       console.error('Error during login:', error.message);
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <div>
//       <Container className="login-container mb-4  align-item-center">
//         <Row className="justify-content-center ">
//           <Col xs={12} md={8} lg={6} className="login-form-container logincontainer">
//             <div className="mb-2 text-align-center">
//               <h3 className="font-light text-3xl text-gray-800 mt-4 mb-4">Login</h3>
//             </div>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form>
//               <Form.Group controlId="formUsername">
//                 <Form.Label>Your Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="Your Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <Button variant="primary" onClick={handleLogin} className="login-button">
//                 Login
//               </Button>
//               <div className="mt-3">
//                 <Link to="/forgot-password">Forgot Password?</Link>
//               </div>
//               <div className="mt-3">
//                 Don't have an account? <Link to="/register">Register</Link>
//               </div>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Login;



// Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Update the path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <div>
      <Container className="login-container mb-4  align-item-center">
        <Row className="justify-content-center ">
          <Col xs={12} md={8} lg={6} className="login-form-container logincontainer">
            <div className="mb-2 text-align-center">
              <h3 className="font-light text-3xl text-gray-800 mt-4 mb-4">Login</h3>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
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
              <Button variant="primary" onClick={handleLogin} className="login-button">
                Login
              </Button>
              <div className="mt-3">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
