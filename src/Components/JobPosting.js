import React from 'react';
import '../cssFiles/JobPosting.css'

function JobPosting()
{
    return(
        <div className="posting-container">
            <h2>Positions Available:</h2>

            <div className="postings-box">
                <h3>Direct Support Professional - Tempe/Mesa, AZ</h3>
                <button className="DSP-BUTTON">Apply</button>
            </div>
        </div>
    );
}

export default JobPosting;