import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useEffect } from 'react';
import Project from '../components/Project';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-scroll';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan";
    });

    return(
            <div className="main">
            <div className="header hero">
                <Container>
                    <Row style={{textAlign: 'center'}}>
                        <Col>
                            <h2 className="h-title">Hi! My name is</h2>
                            <h1 className="h-lead">
                                Brandon 
                                <span style={{color: 'coral'}}> Hogan</span>
                            </h1>
                            <h3 className='h-body'>A full stack applications developer who specializes in building websites and applications.</h3>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                    <Link to="projects" spy={true} smooth={true} duration={50}>
                        <button className='bttn'>
                                View Projects
                        </button>
                    </Link>
                    </Row>
                </Container>
            </div>
            </div>
    )
}

export default Header;