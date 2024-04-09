import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import '../cssFiles/JobDescription.css'

function JobDescription()
{
    return(
        <div className="main-area">
            <div className="symbolexpl">
                <FontAwesomeIcon className="bf-icon" icon={faBriefcase} size="6x"/>
            </div>

            <p className="job-info-desc"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, 
                modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, 
                neque doloribus!
            </p>

            <div className="symbolexpl2">
                <FontAwesomeIcon className="bf-icon" icon={faBriefcase} size="6x"/>
            </div>
        </div>
    );
}

export default JobDescription;