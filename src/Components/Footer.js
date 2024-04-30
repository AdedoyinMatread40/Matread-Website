import React from 'react';
import{ Link } from 'react-router-dom';
import '../cssFiles/Footer.css'

const Footer = () =>
{
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        
                            <h4>Company</h4>
                            <Link to="/" className="nav-link" onClick={scrollToTop}>
                                <p>Home</p>
                            </Link>
                            <Link to="/about-us" className="nav-link" onClick={scrollToTop}>
                                <p>About Us</p>
                            </Link>
                            <Link to="/services" className="nav-link" onClick={scrollToTop}>
                                <p>Services</p>
                            </Link>
                            <Link to="/contact-us" className="nav-link" onClick={scrollToTop}>
                                <p>Contact Us</p>
                            </Link>
                            <Link to="/careers" className="nav-link career" onClick={scrollToTop}>
                                <p>Careers</p>
                            </Link>

                        
                </div>


                </div>

                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                        @{new Date().getFullYear()} Matread Care. All right reserved
                        </p>
                    </div>
                </div>
                

            </div>

        </div>

    );
}

export default Footer;