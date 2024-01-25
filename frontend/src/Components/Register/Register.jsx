import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const history = useHistory();

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        console.error('Password and confirm password do not match');
        return;
      }

      const response = await axios.post('http://localhost:3000/api/v1/users/register', {
        username,
        email,
        password,
        confirmPassword,
        roles: 'CLIENT',
      });

      console.log(response.data);

      // // Redirect to login page upon successful registration
      // history.push('/login');

    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
    
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
       <p>
        Already have an account?{' '}
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
};

export default RegistrationForm;
