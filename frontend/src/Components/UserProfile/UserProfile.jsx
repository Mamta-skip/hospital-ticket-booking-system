// UserDashboard.js
import React from 'react';
import { useAuth } from '../AuthContext'; // Update the path

const UserDashboard = () => {
  const { user } = useAuth(); // Access user information using the useAuth hook

  return (
    <div>
      <h2>User Dashboard</h2>
      {user ? (
        <>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
          
        </>
      ) : (
        <p>User information not available</p>
      )}
    </div>
  );
};

export default UserDashboard;
