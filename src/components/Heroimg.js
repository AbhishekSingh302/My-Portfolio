import { Link } from "react-router-dom";
import "./HeroimgStyles.css";
import React from 'react';
import IntroImg from '../images/heroimg.jpg';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <h1>HI, <span>I'M</span> ABHISHEK</h1>
            <h4>FRONT-END DEVELOPER</h4>
            <div style={{margin: '1.5rem 0'}}>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg
