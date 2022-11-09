import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect } from 'react';

export default function About(props) {

    useEffect(() => {
        document.title = "Brandon Hogan | About";
    });


  return (
    <div className="main">
                <Container className="hero">
                        <Row className='justify-content-center'>
                            <h2 className='h-title'>About Me</h2>
                        </Row>
                        <Row className='justify-content-center'>
                            <h3 className='lead'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
                        </Row>
                        <Row className='sub-row'>
                            <Col className='sub-col'>
                                <h3 className='sub-col-header'>Get to know me!</h3>
                                <p>I'm a Full Stack Developer who enjoys building the Web & Mobile Applications. Check out some of my work in the Projects section.</p>
                                <p>In order to benefit other members of the developer community, I also enjoy contributing content that is linked to the knowledge I have acquired over the years in web development. Please feel free to connect with me or follow me on Linkedin, where I share relevant Web Development and Programming stuff.</p>
                                <p>I'm interested in employment possibilities where I can grow, learn, and contribute. Please get in touch with me if you have a suitable opportunity that matches my qualifications and expertise.</p>
                            </Col>
                            <Col className='sub-col'>
                                <h3 className='sub-col-header'>Skills</h3>
                                <Button className='skill-badge' variant='secondary' disabled>HTML</Button>
                                <Button className='skill-badge' variant='secondary' disabled>CSS</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Javascript</Button>
                                <Button className='skill-badge' variant='secondary' disabled>C#</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Python</Button>
                                <br />
                                <Button className='skill-badge' variant='secondary' disabled>React JS</Button>
                                <Button className='skill-badge' variant='secondary' disabled>React Native</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Git</Button>
                                <Button className='skill-badge' variant='secondary' disabled>SQL</Button>
                                <Button className='skill-badge' variant='secondary' disabled>Responsive Design</Button>
                                <Button className='skill-badge' variant='secondary' disabled>SASS</Button>
                            </Col>
                        </Row>
                </Container>
    </div>
  )
}
