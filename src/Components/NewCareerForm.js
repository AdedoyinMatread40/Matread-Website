import React, {useState, useRef} from 'react'
import '../cssFiles/NewCareerPage.css';
import { Form } from 'react-bootstrap'
import { ReactComponent as Loader } from '../LOADER/loader.svg'
import ResponsiveDialog from './ResponsiveDialog.js';

function NewCareerPage()
{
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
        <div className="form-wrapper">
            <Form onSubmit={handleSubmit}>
                <h2 style={{marginBottom: '15px', textAlign: 'center'}}>
                    If your skills and passion align with our work, we encourage you to submit your application. Please complete the form below with your details
                </h2>

                <div className="main-career-form">
                    <div className="car row1">
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="row-name" value={name} name="name" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="car row2">
                        <label htmlFor="phone">Phone: </label>
                        <input type="tel" id="row-phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(XXX)-XXX-XXX" required/>
                    </div>

                    <div className="car row3">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="row-email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" required/> 
                    </div>    

                    <div className="car row4">
                        <label htmlFor="address">Address: </label>
                        <input type="text" id="row-address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" required/>
                    </div>
                    <div className="car row5">
                        <label htmlFor="file"> Upload Resume:</label>
                        <input type="file" ref={inputFile} onChange={(e) => setFile(e.target.files[0])} id="row-file" />
                    </div>

                    <div className="car row6">
                        <button id="submit-form-info" type="submit" disabled={loading}>{loading ? <Loader className="spinner"/> : <>Submit</>}</button>
                    </div>
                </div>

                
            </Form>

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

export default NewCareerPage;