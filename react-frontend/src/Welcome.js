import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';

const Welcome = () => {
  return (
      <div className="welcome-container">
        <div className="welcome-content">
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/633px-PricewaterhouseCoopers_Logo.svg.png"
              alt="PwC Java Academy Logo"
              className="mb-4"
              height={"150px"}
          />
          <h1 className="mb-4">Welcome to PwC Java Academy</h1>
          <p className="mb-4">Explore the Future of Employee Management</p>
          <Link to="/employees" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </div>
      </div>
  );
};

export default Welcome;