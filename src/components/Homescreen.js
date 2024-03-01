//Homescreen.js

import React from 'react'
import { Link } from 'react-router-dom'
import './Homescreen.css'

const HomeScreen = () => {
  return (
    <div className="home-screen-container">
      <header className="header">
        <div className="header-links">
          <Link to={"/"} className="header-link">RENTFURLAX</Link>
          <Link to={"/register"} className="header-link">Register</Link>
          <Link to={"/login"} className="header-link">Login</Link>
        </div>
      </header>
      <div class="center-content">
    <h1 class="welcome-heading">Welcome to RENTFURLAX</h1>
    <p class="welcome-message">Find the best rental services for your needs.</p>
    <img src="https://i.pinimg.com/originals/f9/ce/20/f9ce20590a6a1ae60b660b87da1fafd8.jpg" alt="Welcome Image" />
  
  </div>
    </div>
  );
};

export default HomeScreen;
