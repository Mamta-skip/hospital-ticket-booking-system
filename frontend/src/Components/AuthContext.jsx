// AuthContext.js
import { createContext, useContext, useState } from 'react';
import {userIsAdmin} from '../authutils';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      // Call your login API here, assuming it returns a token on success
      const response = await fetch('http://localhost:3000/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const { token } = await response.json();

      // Update authentication state
      setIsAuthenticated(true);

      // Store the token
      localStorage.setItem('token', token);

      // Clear any previous errors
      setError(null);

      console.log('Login successful');
    } catch (error) {
      console.error('Error during login:', error.message);
      // Update authentication state and set error
      setIsAuthenticated(false);
      setError('Invalid username or password');
    }
  };

  const logout = () => {
    // Implement your logout logic
    setIsAuthenticated(false);
    // Additional actions, e.g., removing token from local storage
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, userIsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
