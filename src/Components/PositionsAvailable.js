import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DSP from '../images/DSPLOGO.jpg';

function PositionsAvailable()
{

    const PositionCard = () =>{
        return(
            <Card style={{width: '18rem' }}>
                <Card.Img variant="top" src={DSP} />
                <Card.Body>
                    <Card.Title>Direct Support Professional</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


        );
    };

    return(
        <div>
            <div className="position-row">
                <PositionCard />




            </div>





        </div>




    );

}

export default PositionsAvailable;