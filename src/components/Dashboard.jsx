import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const enteredUsername = localStorage.getItem('enteredUsername');

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      {enteredUsername ? (
        <>
          <p className="welcome-message">Welcome, {enteredUsername}!</p>
          <Link to="/login" className="logout-link">
            Logout
          </Link>
        </>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;




