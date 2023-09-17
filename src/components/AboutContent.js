import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';
import profile from "../images/profile.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="img-container">
            <img src={profile} alt="profile" />
        </div>
      </div>
      <div className="right">
        <h1>Hi, I am ABHISHEK</h1>
        <h4>Front-End Developer</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/contact" >
            <button className="btn">Contact Me</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent
