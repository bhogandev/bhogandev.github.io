import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-scroll';
import resume from '../assets/BrandonHogan_Resume.pdf';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '../dist/css/main.css';

const NavBar = (props) => {
    return (
        <Navbar className='nav' expand="lg" style={{ marginRight: 0}} fixed="top">
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="m-auto">
                    <Nav.Link className='nav-item'>
                        <Link to="home" spy={false} smooth={true} duration={50} style={{ color: 'white' }}>
                            HOME
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="projects" spy={false} smooth={true} duration={50} style={{ color: 'white' }}>
                            PORTFOLIO
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="about" spy={false} smooth={true} duration={50} style={{ color: 'white' }}>
                            ABOUT
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="contact" spy={false} smooth={true} duration={50} style={{ color: 'white' }}>
                            CONTACT
                        </Link>
                    </Nav.Link>
                    <Nav.Link href={resume} className='nav-item' style={{ color: 'white' }}>
                        RESUME
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://twitter.com/BrandonTheDev" className='nav-item' target="blank" style={{ color: 'white' }}>
                        <XIcon />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/bhogandev" className='nav-item' target="blank" style={{ color: 'white' }}>
                        <GitHubIcon />
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/bhogandev" className='nav-item' target="blank" style={{ color: 'white' }}>
                        <LinkedInIcon />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
