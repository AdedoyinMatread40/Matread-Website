import Section1 from './Section1';
import './Services.css';
import Footer from './Components/Footer';
import PositionsAvailable from './Components/PositionsAvailable';

function PageTitle(){
    return(
        <div className="page-title"><div id="title">Services</div></div>   
       );
}

//EachProgram

function ServicesPage(){

    return(

        <div className="services">
            <Section1 />
            <PageTitle />
            <PositionsAvailable />
            <Footer />
        </div>

    );




}

export default ServicesPage;