import React from 'react';
import '../cssFiles/NewContactUs.css';
import whiteBack from '../images/WHITE3.jpg';
import 'ldrs/ring';
import ContactInfo from './ContactInfo';

function NewContactUs()
{
    return(
        <div className="contact-section" style={{ backgroundImage: `url(${whiteBack})` }}> 
            <ContactInfo />
        </div>
    );
    
}

export default NewContactUs;