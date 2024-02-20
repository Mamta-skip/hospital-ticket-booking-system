// AdminRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './Components/AuthContext';

const AdminRoute = ({ element }) => {
  const { isAuthenticated, userIsAdmin } = useAuth();

  return isAuthenticated && userIsAdmin() ? element : <Navigate to="/login" />;
};

export default AdminRoute;
