import React from 'react';
import { useState } from 'react';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {

    const[click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    return (
        <div className='header'>
            <Link to="/">
                <h1><span>|</span> ABHISHEK</h1>
            </Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={handleclick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}}/>):(<FaBars size={20} style={{color: "#fff"}}/>)};
            </div>
        </div>
    )
}

export default Navbar
