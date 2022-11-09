import React, {useState} from 'react'
import {Container, Row, Col, FormGroup, Form, Label, FormLabel, Input, InputGroup, Button} from 'react-bootstrap';
import { useEffect } from 'react';
import { sendContactForm } from '../middleware/airtableAPI';


export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    function sendEmail() {
        sendContactForm(name, email, subject, message);
    }

  return (
    <div className='main'>
        <Container className="hero">
            <Container>
                        <Row className='justify-content-center'>
                            <h3 className='h-title'>Contact</h3>
                        </Row>
                        <Row className='justify-content-center'>
                            <p className='lead'>Want to work together or have any questions? Feel free to contact me!</p>
                        </Row>
                        <Row className='justify-content-center'>
                                <Form className='f-style'>
                                    <Form.Group className='mb-3' controlId='contact-name'>
                                        <Form.Label className='f-label'>Name</Form.Label>
                                        <Form.Control className='f-control' type='text' placeholder='Enter Your Name' value={name} onChange={event => setName(event.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='contact-name'>
                                        <Form.Label className='f-label'>Email</Form.Label>
                                        <Form.Control className='f-control' type='email' placeholder='Enter Your Email' value={email} onChange={event => setEmail(event.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='contact-name'>
                                        <Form.Label className='f-label'>Subject</Form.Label>
                                        <Form.Control className='f-control' type='text' placeholder='Enter A Subject' value={subject} onChange={event => setSubject(event.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='contact-name'>
                                        <Form.Label className='f-label'>Message</Form.Label>
                                        <Form.Control as='textarea' className='f-control' rows={3} placeholder='Enter Your Message' value={message} onChange={event => setMessage(event.target.value)}/>
                                    </Form.Group>
                                    <div style={{textAlign: 'center'}}>
                                        <button className='bttn' onClick={sendEmail}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                        </Row>
                        </Container>
        </Container>
    </div>
  )
}
