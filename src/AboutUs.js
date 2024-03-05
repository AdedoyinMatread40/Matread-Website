import React from 'react';
import companyInfo  from './data';
import Section1 from './Section1.js';
import AboutDescription from './Components/AboutDescription.js';
import Footer from './Components/Footer'

function PageTitle(){
    return(
        <div className="page-title"><div id="title">About Us</div></div>   
       );
}

function AboutUsPage(){

    return(

        <div>
          <div><Section1 /></div>
          <div><PageTitle /></div>
          <div><AboutDescription /></div>
          <div><Footer /></div>
        </div>
            

       






    );




}

export default AboutUsPage;