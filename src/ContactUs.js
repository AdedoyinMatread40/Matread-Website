import React, { useState} from 'react';
import Section1 from './Section1';
import './ContactUs.css';
import whiteBack from './images/WHITE3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser} from '@fortawesome/free-solid-svg-icons';
import companyInfo  from './data';
import 'ldrs/ring';
import { ReactComponent as Loader } from './LOADER/loader.svg'
import ResponsiveDialog from './Components/ResponsiveDialog';
import Footer from './Components/Footer'


function PageTitle(){
    return(
     <div className="page-title"><div id="title">Contact Us</div></div>   
    );
    
}

function ContactSection(){

    const[loading, setLoading] = useState(false);
    const[isModalOpen, setModalOpen] = useState(false);
     

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    
    const[formData, setFormData] = useState({ //instantiates the form to input data
        name: '',
        email: '',
        message: ''
    });
    
    const handleChange = (event) => { //when an input element within a form changes, a change event is fired
        
        setFormData({                 //used to update the state of formData
            ...formData,              //takes all the existing key-value pairs from the formData object and spreading them out into this new object
            [event.target.name]: event.target.value //This fetches the name attribute of the input element, and this gets the current value of the input element
        });
    };

    const handleSubmit = async (event) => { //when the submit button is clicked, this get triggered
        event.preventDefault(); //stops the refresh of the page when a form is submitted to send a request to the server

        
        try{
            setLoading(true);
            const response = await fetch('http://localhost:3001/send', { //sends the formData to the server
                method: 'POST', //specifies the HTTP request as POST
                headers: {      //tells server that the type being sent
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData) //converts formData Object into a string to be sent as the request body
            });

            if(response.status === 200)
            {
                scrollToTop();
                console.log('Email successfully sent');
                setFormData({name: '', email:'', message: ''});
                setLoading(false);
                setModalOpen(true);
                
            } else{ 
                console.log('Failed to send email');
                setLoading(false);
            }
        } catch (error){
            console.error('There was an error sending the email', error);
            setLoading(false);
        }
    };

    /*
    useEffect(() => {
        if(!loading){
            setShowPopup(!showPopup);
        }
        
    }, [showPopup]);
    */

    return(
        <div className="contact-section" style={{ backgroundImage: `url(${whiteBack})` }}>
        
        <div className="left-side">
            <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" style={{height: "24px"}}value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="input-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
            </div>
            <button className="button-group" type="submit" disabled={loading}>{loading ? <Loader className="spinner"/> : <>Send</>}</button>
            </form>
        </div>
        <div className="vertical-line1"></div>
        <div className="right-side">
        <FontAwesomeIcon className="icon-home" icon={faHouseUser}  size="7x" color="blue"/>
        <div className="plus-info">
            <p>Office Number: {companyInfo.phone}</p>
            <p className="dots">....................................................................</p>
            <p>Please feel free to ask any questions</p>
        </div>
        </div>

        <div>
            {isModalOpen && (
                <ResponsiveDialog onClose={() => setModalOpen(false)}>
                    <h2>Contact Form</h2>
                    <p>Message has been sent Successfully</p>
                </ResponsiveDialog>
            )}
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
        <ContactSection />
      </div>  

      <div>
        <Footer />
      </div>  
        

    </div>    

    );




}

export default ContactUsPage;
