import React from 'react';
import whiteBack from '../images/WHITE3.jpg';
import '../cssFiles/AboutDescription.css';
import img4 from '../images/PICSLIDER3.jpg';
import img5 from '../images/PICSLIDER4.jpg';

function AboutDescription (){


    return(
        <div className="about-con" style={{ backgroundImage: `url(${whiteBack})`}}>
            <div className="major-content">
             <div className="about-1">
                <div className="hero-content">
                    
                    <p>At Matread Care LLC, our commitment extends beyond just providing care—it's about creating a family. We strive to foster a homely atmosphere where every resident and their family members can feel comfortable and supported</p>
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
                    <p>Our staff are more than just caregivers—they are compassionate companions who dedicate themselves to enhancing the lives of our residents. With a focus on personalized care and respect, we ensure that each resident not only receives the care they need but also experiences joy and companionship in their daily lives</p>
                </div>
          </div>
           

            </div>
        </div>

    );


}

export default AboutDescription;