import React, { useState, useEffect} from 'react';
import { Form } from 'react-bootstrap'
import '../cssFiles/ContactForm.css';
import 'ldrs/ring';
import { ReactComponent as Loader } from '../LOADER/loader.svg'
import ResponsiveDialog from './ResponsiveDialog';


function ContactForm()
{
    const[loading, setLoading] = useState(false);
    const[isModalOpen, setModalOpen] = useState(false);

    useEffect(() => {

        const handleTouchMove = (e) => {
            if(isModalOpen)
            {
                e.preventDefault();
            }
        };

        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
        document.addEventListener('touchmove', handleTouchMove, {passive: false});

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener('touchmove', handleTouchMove, {passive: false});

        };
    }, [isModalOpen]);
     

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
    
    return(
  <div className="form-wrapper">
        <div className="contact-form">
            <Form onSubmit={handleSubmit}>

                <div className="main-career-form">
                    <div className="car row1">
                        
                        <input type="text" id="row-name" value={formData.name} name="name" placeholder="Name" onChange={handleChange} required/>
                    </div>

                    <div className="car row3">
                        <input type="email" id="row-email" value={formData.email} onChange={handleChange} placeholder="Email"name="email" required/> 
                    </div>    

                    <div className="car row4">
                        <textarea type="message" id="row-message" value={formData.message} placeholder="Message"onChange={handleChange} name="message" required/>
                    </div>
                    

                    <div className="car row6">
                        <button id="submit-form-info" type="submit" disabled={loading}>{loading ? <Loader className="spinner"/> : <>Submit</>}</button>
                    </div>
                </div>

                
            </Form>
        </div>

            <div>
                {isModalOpen && (
                    <ResponsiveDialog onClose={() => setModalOpen(false)}>
                        <h2>Contact Form</h2>
                        <p>Message Submitted Successfully</p>
                    </ResponsiveDialog>
                )}
            </div>
        </div>

    );
}

export default ContactForm;