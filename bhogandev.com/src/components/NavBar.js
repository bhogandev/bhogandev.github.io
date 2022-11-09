import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import * as Scroll from 'react-scroll';
import {Link} from 'react-scroll';
import resume from '../assets/BrandonHogan_Resume.pdf';
import '../dist/css/main.css'

const NavBar = (props) => {

    return (
        <Navbar className='nav' expand="lg" style={{marginRight: 0}} fixed="top">
            <Navbar.Brand style={{paddingLeft: '0%', textDecoration: 'none'}}>
                <LinkContainer to="/">
                    <Nav.Link style={{color: 'black'}}>BRANDON HOGAN</Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="ml-auto">
                    <Nav.Link className='nav-item'>
                        <Link to="home" spy={false} smooth={true} duration={50}>
                            HOME
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="projects" spy={false} smooth={true} duration={50}>
                            PORTFOLIO
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="about" spy={false} smooth={true} duration={50}>
                            ABOUT
                        </Link>
                    </Nav.Link>
                    <Nav.Link className='nav-item'>
                        <Link to="contact" spy={false} smooth={true} duration={50}>
                            CONTACT
                        </Link>
                    </Nav.Link>
                    <Nav.Link href={resume} className='nav-item' target="blank">RESUME</Nav.Link>
                    <Nav.Link href="https://github.com/bhogandev" className='nav-item' target="blank">GITHUB</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/bhogandev" className='nav-item' target="blank">LINKEDIN</Nav.Link>
            </Nav>
            </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;