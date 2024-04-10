import React from 'react';
import '../cssFiles/JobInfo.css';
import JobDescription from './JobDescription';
import JobPosting from './JobPosting';
import whiteBack from '../images/WHITE3.jpg';


function JobInfo(){
    return(
        <div className="job-info-parent">
            <div className="job-info" style={{ backgroundImage: `url(${whiteBack})` }}>
                <JobDescription />
                <JobPosting />
            </div>
        </div>

        
    );
}

export default JobInfo;