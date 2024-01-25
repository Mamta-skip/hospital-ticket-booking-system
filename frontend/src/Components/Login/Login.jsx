import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post( 'http://localhost:3000/api/v1/users/login', {
        email,
        password,
      });

      console.log(response.data);

      
      // history.push('/home'); 

    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error - you can display an error message to the user
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <form>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginForm;
