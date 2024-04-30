import './Home.css';
import React, { useState, useEffect, useRef } from 'react';
import{ Link } from 'react-router-dom';
import familyImage from './images/MATREAD LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaBars } from "react-icons/fa"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

//Need to potentially implement a function that listens to window width and height

//If width is certain width, get rid of sticky navbar

function Section1() {
  const[scroll, setScroll] = useState(false);
  const[width, setWidth] = useState(window.innerWidth);
  const[navBar, setNavbarShow] = useState(false);

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleTouchMove = (e) => {
      if(navBar)
      {
          e.preventDefault();
      }
    };

    document.body.style.overflow = navBar ? "hidden" : "auto";
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = "auto";
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });

    };

  }, [navBar]);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    if(!navBar)
    {
      setNavbarShow(true);
    }
    else
    {
      setNavbarShow(false);
    }
  }
  
  return (
    <div className={`section1 ${scroll && width > 1181 ? "sticky" : ""}`}>
      <div className="header">
        <div className="company_image">
        <Link to="/" onClick={scrollToTop}>
          <img src={familyImage} id="companyLogo" alt="family"></img>
        </Link>
        </div>
        <button className="menu-icon bars" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} size="3x"/>
        </button>
        
        <div className="navbar" ref={navRef}>
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={scrollToTop}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="nav-link" onClick={scrollToTop}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="nav-link career" onClick={scrollToTop}>
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