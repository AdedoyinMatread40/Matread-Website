import React from 'react';
import Section1 from './Section1';
import CareerForm from './Components/CareerForm.js';
import companyInfo  from './data';


function PageTitle(){
    return(
        <div className="page-title"><div id="title">Careers</div></div>   
       );
}

function Section5(){
    return(
        <div className="section-5">
            <div className="companyInfo">
              {companyInfo && (
                <>
                <p className="info">{companyInfo.address}</p>
                <p className="info">Phone: {companyInfo.phone}</p>
                <p className="info">Email: {companyInfo.email}</p>
                
                </>
              )}
            

            <p className="copy-info">&copy; 2023 Matread Care. All rights reserved.</p>
            </div>

            <div className="vertical-line"></div>

            <div className="add-Ons">
              
              <p className="mission">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!</p>
              
              </div>        

      </div>
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
                <Section5 />
            </div>

        </div>


    );




}

export default CareersPage;