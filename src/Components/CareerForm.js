import React , { useState, useRef }from 'react';
import '../cssFiles/CareerForm.css';
import whiteBack from '../images/WHITE3.jpg';
import { ReactComponent as Loader } from '../LOADER/loader.svg'
import ResponsiveDialog from './ResponsiveDialog.js';


function CareerForm(){
    const[isModalOpen, setModalOpen] = useState(false);

    const[loading, setLoading] = useState(false);

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const[phone, setPhone] = useState("");
    const[file, setFile] = useState(null);
    const inputFile = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
    
        formData.append("name", name);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("file", file);
        

        try{
            const response = await fetch ('http://localhost:3001/send-form', {
                method: 'POST',
                body: formData
            });

            if(response.status === 200){
                console.log("Form sent succesfully");
                setName("");
                setEmail("");
                setAddress("");
                setPhone("");
                setLoading(false);
                setModalOpen(true);

                if(inputFile.current){
                    inputFile.current.value = "";
                    inputFile.current.type = "text";
                    inputFile.current.type = "file";
                }
            }
            else{
                console.log("Failed to send form");
                setName("");
                setEmail("");
                setAddress("");
                setPhone("");
                setLoading(false);
                if(inputFile.current){
                    inputFile.current.value = "";
                    inputFile.current.type = "text";
                    inputFile.current.type = "file";
                }
            }

        }catch(error){
            console.log("Error sending email", error);
            setLoading(false);
        }
        
    };



    return(

        <div className="career">
            <div className="form" style={{ backgroundImage: `url(${whiteBack})` }}>
            <p id="career_form_para">If your skills and passion align with our work, we encourage you to submit your application. Please complete the form below with your details</p>
            <p id="dots_para">....................................................................</p>
                <div className="text_field">
                    <form onSubmit={handleSubmit}>
                    <div className="group-input1">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="form-name" value={name} name="name" onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className="group-input2">
                        <label htmlFor="phone">Phone: </label>
                        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(XXX)-XXX-XXX" required/>
                    </div>    

                    <div className="group-input3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required/> 
                    </div>    

                    <div className="group-input4">
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" required/>
                    </div>
                    <div className="file-upload">
                        <label htmlFor="file"> Upload Resume:</label>
                        <input type="file" ref={inputFile} onChange={(e) => setFile(e.target.files[0])} id="file" />
                </div>
                <button className="submit-career-form" type="submit" disabled={loading}>{loading ? <Loader className="spinner"/> : <>Submit</>}</button>
                    </form>

                </div>  
            

        
            </div>

            <div>
                {isModalOpen && (
                    <ResponsiveDialog onClose={() => setModalOpen(false)}>
                        <h2>Career Form</h2>
                        <p>Application successfully submitted</p>
                    </ResponsiveDialog>
                )}
            </div>
            
        </div>






    );




}

export default CareerForm;