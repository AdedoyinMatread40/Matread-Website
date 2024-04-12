import Section1 from './Section1';
import './ContactUs.css';
import 'ldrs/ring';
import NewContactUs from './Components/NewContactUs';
import Footer from './Components/Footer'


function PageTitle(){
    return(
     <div className="page-title">
        <div id="title">
            Contact Us
        </div>
    </div>   
    );
    
}

function ContactUsPage(){
    

    return(
    <div className="contactUs">

      <div>
        <Section1 />
      </div>  

      <div>
        <PageTitle />
      </div>

      <div>
        <NewContactUs />
      </div>  

      <div>
        <Footer />
      </div>  
        

    </div>    

    );




}

export default ContactUsPage;
