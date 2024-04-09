import React from 'react';
import ATC from '../images/ATCLOGO.jpg';
import RSP from '../images/RespiteIMG.jpg'
import HM from '../images/HomemakerImg.jpg'
import HHNS from '../images/Home Health Nurse Service Img.jpg'
import NET from '../images/NonEmergeImg.jpg'
import HAB from '../images/HABILITATIONIMG.png'
import '../cssFiles/Card.css';
import '../cssFiles/PositionsAvailable.css';
import whiteBack from '../images/WHITE3.jpg';

const PositionCard = (props) =>{
    return(
        <div className="card">
            <img src={props.image} alt="service-img"/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>

        </div>


    );
};

const ServicesData = [
    {imageService: ATC, titleService: "Attendant Care", serviceDescription: 'Our Attendant Care Services are designed to provide personalized support and assistance to individuals who require aid in their daily activities due to disabilities, health conditions, or age-related challenges. We are committed to enhancing the quality of life for our clients, offering them the freedom to live safely and comfortably in their preferred environment'},
    {imageService: RSP, titleService: "Respite Care", serviceDescription: 'Our Respite Care services are specially designed to provide temporary relief to families and caregivers, ensuring that their loved ones continue to receive attentive, professional care in their absence. Whether it’s due to vacation, work commitments, or simply a need for a well-deserved break, our respite care program offers a seamless continuation of care and peace of mind.'},
    {imageService: HM, titleService: "Homemaker", serviceDescription: 'Our Homemaker Services are designed to assist those who find it challenging to manage day-to-day household tasks. Whether due to aging, disability, or recovery from illness, we provide the necessary support to ensure a clean, organized, and harmonious living environment. Our dedicated professionals help maintain the household, enabling our clients to live more comfortably and independently.'},
    
];

const ServicesData1 = [
    {imageService: HHNS, titleService: "Home Health Nurse Service", serviceDescription: 'Our Home Health Nurse Service offers comprehensive medical care tailored to meet the individual needs of each client right in the comfort of their own home. Designed for those who require regular medical attention, our service bridges the gap between hospital and home, providing high-quality, compassionate care for optimal health and well-being.'},
    {imageService: NET, titleService: "Non-Emergency Transportation", serviceDescription: 'Our Non-Emergency Transportation service is dedicated to providing dependable, secure, and comfortable transportation for those who require assistance traveling to and from medical appointments, therapy sessions, pharmacies, or any other necessary destinations. This service is designed for individuals who do not require immediate medical attention but need support to travel safely due to health conditions, mobility limitations, or lack of access to transportation.'},
    {imageService: HAB, titleService: "Habilitation", serviceDescription: 'Our Habilitation Services are tailored to empower individuals with disabilities by assisting them in developing, maintaining, and improving the life skills necessary for a more independent, productive, and fulfilling life. We focus on enabling participants to master everyday skills that most people take for granted but are essential for their personal independence and social integration.'},
    
];

function PositionsAvailable()
{

    return(
        <div className="positions-available" style={{ backgroundImage: `url(${whiteBack})` }}>

            <div className="position-row">
                {ServicesData.map((item, index) => (
                    <PositionCard key={index} image={item.imageService} title={item.titleService} description={item.serviceDescription}/>
                   
                ))}
            </div>

            <div className="position-row1">
                {ServicesData1.map((item1, index) => (
                    <PositionCard key={index} image={item1.imageService} title={item1.titleService} description={item1.serviceDescription}/>
                   
                ))}
            </div>



        </div>




    );

}

export default PositionsAvailable;