import './Home.css';
import Section1 from './Section1';
import{ Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle ,faListCheck, faPhone} from '@fortawesome/free-solid-svg-icons';
import img1 from './images/PICSLIDER.jpg';
import img2 from './images/PICSLIDER1.jpg';
import img3 from './images/PICSLIDER2.jpg';
import img4 from './images/PICSLIDER3.jpg';
import img5 from './images/PICSLIDER4.jpg';
import whiteBack from './images/WHITE3.jpg';
//import HomePageBanner from './Components/HomePageBanner';
import Footer from './Components/Footer'
import HomeImgBanner from './Components/HomeImageBanner';
//import backgroundVideo from './videos/background-video-for-home.mp4';

const images = [img1, img2, img3, img4, img5];

function Section3(){
  const [current, setCurrent] = useState(0); // [initial image to be shown, function used to update it] 

  useEffect(() => { //Synchronizes with images being iterated over 
    const timer = setTimeout(() => { //setTimeout runs code after some period of time
      setCurrent(current => current === images.length - 1 ? 0 : current + 1); //checks if current is last image
    }, 3000); // Change image every 3 seconds

    // Clean up function
    return () => clearTimeout(timer); //Clears timer when current changes to prevent memory leaks
  }, [current]); //useEffect hook should re run whenever current changes

  return(

    <div className="section3" style={{ backgroundImage: `url(${whiteBack})` }}>
        <div className="header_3">Welcome</div>
        <div className="header_3">........</div> 
      <p id="carouselPara">At Matread Care, we believe everyone deserves a place to call home. Our dedicated team provides a warm, safe, and supportive environment for residents to thrive. We offer personalized care, engaging activities, and a community-oriented atmosphere that fosters health, happiness, and overall well-being. Explore our services and find out how we can help you or your loved ones live a fuller, more joyful life</p>
        <div className="carousel-container">
          {images.map((img, index) => ( //maps over each image in the images array to render
                <img 
                key={index} 
                src={img} 
                alt={`img${index}`} 
                className= {`carousel-image ${index === current ? 'current' : ''}`} //checks if required index = current image
                />
                
          ))}
          
        </div>
      </div>

  );
}

const iconSections = [
  {
    icon: faQuestionCircle,
    text: 'Want to know more about us? Discover our story and the values that guide our care. We are dedicated to creating a nurturing environment that feels like home',
    link: '/about-us',
    buttonText: 'About Us'
  },
  {
    icon: faListCheck,
    text: 'Explore our wide range of services designed to support the well-being of each resident. From daily assistance to personalized care plans, see how we can meet your needs',
    link: '/services',
    buttonText: 'Services'
  },
  {
    icon: faPhone,
    text: 'Have questions or need to discuss specific care options? Our friendly team is here to help. Contact us today for more information',
    link: '/contact-us',
    buttonText: 'Contact Us'
  }
];

function Section4(){
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return(
    <div className="section4">
      
      {iconSections.map(section => (
        <div className="icon-group" key={section.buttonText}>
          <FontAwesomeIcon className="icon" icon={section.icon} size="6x" />
          <p className="icon-text">{section.text}</p>
          <Link to={section.link}><button className="buttonS" onClick={scrollToTop}>{section.buttonText}</button></Link>
        </div>
      ))

      }
      

       
    </div>
  );
}

function HomePage() {
 

    return(

      <div className="homePage">
       
      <div>
        <Section1 />
      </div>
      
      <div>
        <HomeImgBanner />
      </div>
      
      <div>
        <Section3 />
      </div>
      
      <div>
        <Section4 />
      </div>

      <div>
        <Footer />
      </div>
      
      


      </div>

      
    );

}

export default HomePage;