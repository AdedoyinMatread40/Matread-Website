import './Home.css';
import React, { useRef } from 'react';
import{ Link } from 'react-router-dom';
import familyImage from './images/MATREAD LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaBars } from "react-icons/fa"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Section1() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <div className="section1">
      <div className="header">
        <div className="company_image">
        <Link to="/">
          <img src={familyImage} id="companyLogo" alt="family"></img>
        </Link>
        </div>
        <button className="menu-icon bars" onClick={showNavbar}>
          <FontAwesomeIcon  icon={faBars} size="3x"/>
        </button>
        
        <div className="navbar" ref={navRef}>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="nav-link career">
                Careers
              </Link>
            </li>
          </ul>
          <button className="menu-icon close" onClick={showNavbar}>
           <FontAwesomeIcon icon={faTimes} size="3x" color="white"/>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Section1;