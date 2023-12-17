import './Home.css';
import{ Link } from 'react-router-dom';
import familyImage from './images/MATREAD LOGO.png';

function Section1() {
  
  return (
    <div className="section1">
      <div className="header">
        <div className="company_image">
        <Link to="/">
          <img src={familyImage} id="companyLogo" alt="family"></img>
        </Link>
        </div>
        <div className="navbar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/contact-us" className="nav-link">
            Contact Us
          </Link>
          <Link to="/careers" className="nav-link">
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section1;