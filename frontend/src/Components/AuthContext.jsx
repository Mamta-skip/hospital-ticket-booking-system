// AuthContext.js
import { createContext, useContext, useState } from 'react';
import { decodeToken, userIsAdmin, userIsClient } from '../authutils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
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

      // Decode the token to get user information
      const decodedUser = decodeToken(token);

      // Set user state with decoded user information
      setUser(decodedUser);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(decodedUser));
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
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, error, user, userIsAdmin, userIsClient }}>
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
