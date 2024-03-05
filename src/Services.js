import Section1 from './Section1';
import ReactDOM from 'react-dom';
import React, {useState, useRef} from 'react';
import whiteBack from './images/WHITE3.jpg';
import companyInfo  from './data';
import './Services.css';
import Footer from './Components/Footer'

function PageTitle(){
    return(
        <div className="page-title"><div id="title">Services</div></div>   
       );
}

//EachProgram


function Programs(){

    const [showTextBox, setShowTextBox] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [activeBox, setActiveBox] = useState(null);
    const portalRef = useRef(null);

    const handleClick = () => {
        setShowTextBox(!showTextBox);
        if(showTextBox === false){  
            document.body.style.overflow = "hidden"
        }
        else{
          document.body.style.overflow = "auto";  
        }
    };
    
    const handleMouseOver = (event) => {
        setHovered(true);
        setActiveBox(event.target.id);
    };

    const handleMouseOut = () => {
        setHovered(false);
    };

    const handlePortalClick = (event) => { //stops window from closing when clicking on the portal
        event.stopPropagation();
    };



    
    return(
        <div className="programs-section" style={{ backgroundImage: `url(${whiteBack})` }}>
            <div onMouseEnter={handleMouseOver} onMouseLeave={() => setHovered(false)}>
                <div className="box top-left" id="box1" onClick={handleClick}>
                    
                {activeBox === "box1" && hovered ? 'Click for More' : 'Service 1'}
                {showTextBox && ReactDOM.createPortal(
                    <div className="overlay" ref={portalRef} onClick={handlePortalClick} onMouseEnter={handleMouseOut}>
                        <div className="textbox">Content
                        <p className="info-about-service1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!
                        </p>
                        <button id="back-to-aboutUs-button"  onClick={handleClick}>Back</button>
                        </div> 
                    </div>,
                    document.body
                )}
                </div>
                <div className="box top-right" id="box2" onClick={handleClick}>
                
                {activeBox === "box2" && hovered ? 'Click for More' : 'Service 2'}
                {showTextBox && ReactDOM.createPortal(
                    <div className="overlay2" ref={portalRef} onClick={handlePortalClick} onMouseEnter={handleMouseOut}>
                        <div className="textbox2">Content
                        <p className="info-about-service2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!
                        </p>
                        <button id="back-to-aboutUs-button"  onClick={handleClick}>Back</button>
                        </div> 
                    </div>,
                    document.body
                )}
                </div>
                <div className="box bottom-left" id="box3"onClick={handleClick}>
                
                {activeBox === "box3" && hovered ? 'Click for More' : 'Service 3'}
                {showTextBox && ReactDOM.createPortal(
                    <div className="overlay3" ref={portalRef} onClick={handlePortalClick} onMouseEnter={handleMouseOut}>
                        <div className="textbox3">Content
                        <p className="info-about-service3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!
                        </p>
                        <button id="back-to-aboutUs-button"  onClick={handleClick}>Back</button>
                        </div> 
                    </div>,
                    document.body
                )}
                </div>
                <div className="box bottom-right" id="box4" onClick={handleClick}>
                
                {activeBox === "box4" && hovered ? 'Click for More' : 'Service 4'}
                {showTextBox && ReactDOM.createPortal(
                    <div className="overlay4" ref={portalRef} onClick={handlePortalClick} onMouseEnter={handleMouseOut}>
                        <div className="textbox4">Content
                        <p className="info-about-service4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam rem unde esse repudiandae sequi facilis, modi dolore minus consectetur inventore officia libero cum aspernatur corporis dolores optio, neque doloribus!
                        </p>
                        <button id="back-to-aboutUs-button"  onClick={handleClick}>Back</button>
                        </div> 
                    </div>,
                    document.body
                )}
                </div>


            </div>

        </div>
        

    );
}

function ServicesPage(){

    return(

        <div className="services">
            <Section1 />
            <PageTitle />
            <Programs />
            <Footer />
        </div>

    );




}

export default ServicesPage;