import React from 'react'
import '../cssFiles/NewCareerPage.css'
import { Form, Container, Row, Col, FloatingLabel, Button } from 'react-bootstrap'

function NewCareerPage()
{
    return(
        <div classNmae="form-wrapper">
            <Form>
                <h2 style={{marginBottom: '15px', textAlign: 'center'}}>
                    If your skills and passion align with our work, we encourage you to submit your application. Please complete the form below with your details
                </h2>
                <Container fluid>
                    <Row>
                        <Col sm={6} style={{marginBottom: '10px'}}>
                            <FloatingLabel controlId='first-name-label' label="First Name">
                                <Form.Control type='text' placeholder='First name' />
                            </FloatingLabel>
                        </Col>

                        <Col sm={6} style={{marginBottom: '10px'}}>
                            <FloatingLabel controlId='last-name-label' label="Label Name">
                                <Form.Control type='text' placeholder='Last name' />
                            </FloatingLabel>
                        </Col>

                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId='form-email'>
                            <FloatingLabel controlId='email-Label' label='Email'>
                                <Form.Control type='email' placeholder='Enter Email' />
                            </FloatingLabel>
                
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId='form-email'>
                            <FloatingLabel controlId='address-Label' label='Address'>
                                <Form.Control type='text' placeholder='Enter Address' />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId='form-email'>
                            <FloatingLabel controlId='phone-Label' label='Phone'>
                                <Form.Control type='tel' placeholder='Enter Phone Number' />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group className="mb-3" controlId='form-upload'>
                            <FloatingLabel controlId='upload-Label' label='Upload Resume'>
                                <Form.Control type='file' />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>

                </Container>
            </Form>
        </div>

    );
}

export default NewCareerPage;