import "./Navbar.css";
import logo from "../logo.png"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [hamshow, setHamshow] = useState(false);
  const handleHamshow = () => setHamshow(!hamshow)
  return (
    <div className='header'>
       <Link to="/">
       <img src={logo}width="30" height="30" alt={<h1>TRAMSCO</h1>} className="logo"></img>
       </Link>
       <ul className={hamshow ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/our-company">Our Company</Link>
        </li>
        <li className="btn btn-light">
          <Link to="/contact-us">Contact Us</Link>
        </li>
       </ul>

       <div className="hamburger" onClick=
       {handleHamshow}>
        {hamshow ? (
          <FaTimes size={20} style={{ color: 
            "#fff"}} />
        ) :(
          <FaBars size={20} style={{ color: "#fff"
        }} />
      )}
       </div>


    </div>
  )
}

export default Navbar