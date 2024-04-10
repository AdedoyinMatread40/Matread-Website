import React from 'react';
import Section1 from './Section1';
import JobInfo from './Components/JobInfo.js';
import Footer from './Components/Footer'
import NewCareerPage from './Components/NewCareerForm.js'


function PageTitle(){
    return(
        <div className="page-title"><div id="title">Careers</div></div>   
       );
}

function CareersPage(){

    return(
        <div>

            <div>
                <Section1 />
            </div>

            <div>
                <PageTitle />
            </div>
            
            <div>
                <JobInfo />
            </div>

            <div>
                <NewCareerPage />
            </div>

            <div>
                <Footer />
            </div>

        </div>


    );




}

export default CareersPage;