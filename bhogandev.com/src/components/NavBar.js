import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = (props) => {

    return (
        <Navbar bg="light" expand="lg" variant="light">
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link>BRANDON HOGAN</Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <LinkContainer to="/projects">
                    <Nav.Link>Projects</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                    <Nav.Link>Blog</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default NavBar;