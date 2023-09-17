import "../components/FooterStyles.css";
import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p>123 Indrayaninagar Pune</p>
                            <p>Maharashtra.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            906 701 7403
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                            singhabhishek91420@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>My name is Abhishek Singh. I am a front end developer. I enjoy discussing new projects and design challenges.</p>
                    <div className="social">
                        <NavLink to="https://www.facebook.com/profile.php?id=100010830917847" target="_blank"><FaFacebook size={25} style={{color: '#fff', marginRight: '1rem'}}/></NavLink>
                        <NavLink to="https://www.instagram.com/__abhishek_302__/" target="_blank"><FaInstagram size={25} style={{color: '#fff', marginRight: '1rem'}}/></NavLink>
                        <NavLink to="https://www.linkedin.com/in/abhishek-singh-58956028b/" target="_blank"><FaLinkedin size={25} style={{color: '#fff', marginRight: '1rem'}}/></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
