import React from 'react';
import Section1 from './Section1';
import CareerForm from './Components/CareerForm.js';
import companyInfo  from './data';
import Footer from './Components/Footer'


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
                <CareerForm />
            </div>

            <div>
                <Footer />
            </div>

        </div>


    );




}

export default CareersPage;