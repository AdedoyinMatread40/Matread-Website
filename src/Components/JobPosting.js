import React, { useState } from 'react';
import '../cssFiles/JobPosting.css'
import ResponsiveDialog from './ResponsiveDialog.js';

function JobPosting()
{
    const[modalCertsOpen, setModalCertsOpen] = useState(false);

    const handleCerts= () =>{
        setModalCertsOpen(true);
    };


    return(
        <div className="posting-container">
            <h2>Positions Available:</h2>

            <div className="postings-box">
                <h3>Direct Support Professional - Tempe/Mesa, AZ</h3>
                <button className="DSP-BUTTON" onClick={handleCerts}>Apply</button>
            </div>

            <div>
                {modalCertsOpen && (
                    <ResponsiveDialog onClose={() => setModalCertsOpen(false)}>
                        <h1 className="certpopup-heading" style={{fontFamily: `Playfair Display, Georgia, serif`}}>Certifications Needed</h1>
                        <br></br>
                        <p>First Aid/CPR</p>
                        <p >Article 9</p>
                        <br></br>
                        <p>The form to apply is below!</p>
                    </ResponsiveDialog>
                )}
            </div>

        </div>
    );
}

export default JobPosting;