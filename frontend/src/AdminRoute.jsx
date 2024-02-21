// AdminRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Components/AuthContext';

export const AdminRoute = ({ element }) => {
  const { isAuthenticated, userIsAdmin } = useAuth();

  return isAuthenticated && userIsAdmin() ? element : <Navigate to="/login" />;
};

export const UserRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};
