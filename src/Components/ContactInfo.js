import '../cssFiles/ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser} from '@fortawesome/free-solid-svg-icons';
import companyInfo  from '../data';


function ContactInfo()
{
    return(
        <div className="contact-info">
            
            <div className="main-contact">
                <FontAwesomeIcon className="icon-home" icon={faHouseUser}  size="7x" color="blue"/>
                <div className="plus-info">
                    <p>Office Numbers:</p>
                    <p>{companyInfo.phone1}</p>
                    <p>{companyInfo.phone2}</p>
                    <p className="dots">....................................................................</p>
                    <p>Please feel free to ask any questions</p>
                </div>
            </div>
        
        </div>

    );



}

export default ContactInfo;



