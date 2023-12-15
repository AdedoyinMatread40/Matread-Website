import './Home.css';
import companyInfo  from './data';
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

const images = [img1, img2, img3, img4, img5];

function Section2(){
  return(
    <div className="section2">
        
        <div id="quote">
      <p className="quote-text">Alone we can do so little, together we can do so much</p>
      <p className="quote-author">- Helen Keller</p>
      </div>
      
      </div>

  );
}

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
      <p id="carouselPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!',
    link: '/about-us',
    buttonText: 'About Us'
  },
  {
    icon: faListCheck,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!',
    link: '/services',
    buttonText: 'Services'
  },
  {
    icon: faPhone,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!',
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



function Section5(){
  return(
    <div className="section5">
            <div className="companyInfo">
              {companyInfo && (
                <>
                <p className="info">{companyInfo.address}</p>
                <p className="info">Phone: {companyInfo.phone}</p>
                <p className="info">Email: {companyInfo.email}</p>
                
                </>
              )}
            

            <p className="copy-info">&copy; 2023 Matread Care. All rights reserved.</p>
            </div>

            <div className="vertical-line"></div>

            <div className="add-Ons">
              
              <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
              
              </div>        

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
        <Section2 />
      </div>
      
      <div>
        <Section3 />
      </div>
      
      <div>
        <Section4 />
      </div>

      <div>
        <Section5 />
      </div>
      
      


      </div>

      
    );

}

export default HomePage;