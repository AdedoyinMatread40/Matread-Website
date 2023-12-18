import React from 'react';
import '../cssFiles/HomePageBanner.css';
import backgroundVideo from '../videos/correct-vid.mp4';

const HomePageBanner = () =>
{

    return (
   
        <div className="container">
            <div className="video-container">
                <video autoPlay loop muted width="100%" id="vid">
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="content">
                    <p className="quote-text">Alone we can do so little, together we can do so much</p>
                    <p className="quote-author">- Helen Keller</p>
                </div>    
            </div>


        </div>
       


    );
};

export default HomePageBanner;