import React from 'react';
import whiteBack from '../images/WHITE3.jpg';
import '../cssFiles/AboutDescription.css';
import img4 from '../images/PICSLIDER3.jpg';
import img5 from '../images/PICSLIDER4.jpg';

function AboutDescription (){


    return(
        <div className="about-con">
            <div className="major-content" style={{ backgroundImage: `url(${whiteBack})`}}>
             <div className="about-1">
                <div className="hero-content">
                    <h2>Welcome To Our Website</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
                </div>
                <div className="about-info-1-image">
                    <img id="first_img" src={img4} alt="GroupHomeImg" />
                </div>
            </div>
            

          <div className="about-2">
                <div className="about-info-2-image">
                    <img id="second_img" src={img5} alt="GroupHomeImg" />
                </div>

                <div className="hero-content2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
                </div>
          </div>
           

            </div>
        </div>

    );


}

export default AboutDescription;