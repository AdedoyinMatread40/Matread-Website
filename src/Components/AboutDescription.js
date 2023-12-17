import React from 'react';
import whiteBack from '../images/WHITE3.jpg';
import '../cssFiles/AboutDescription.css';
import img4 from '../images/PICSLIDER3.jpg';

import img5 from '../images/PICSLIDER4.jpg';

function AboutDescription (){


    return(

        <div className="container">
            <div className="major-content" style={{ backgroundImage: `url(${whiteBack})`}}>
                <div id="about-info-1">
                    <p id="first-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
                    <img id="first_img" src={img4} alt="GroupHomeImg" />
                </div>

                <div id="about-info-2">
                    <img id="second_img" src={img5} alt="GroupHomeImg2" />
                    <p id="second-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
                </div>

            </div>



        </div>



    );


}

export default AboutDescription;
