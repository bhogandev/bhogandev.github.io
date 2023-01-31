import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'

const Footer = (props) => {

    return (
        <Container className='footer' fluid>
            <Container>
            <Row style={{paddingTop: '6%'}}>
                <Col md="4">
                    <Row className='f-row f-row-header'>
                        <h2>BRANDON HOGAN</h2>
                    </Row>
                    <Row className='f-row'>
                        <p>A full stack Web &amp; Applications developer, focused on building or improving your applications.</p>
                    </Row>
                </Col>
                <Col md="6">
                </Col>
                <Col sm="2">
                <Row className='f-row f-row-header'>
                    <h2>SOCIAL</h2>
                </Row>
                <Row className='f-row'>
                <div className="f-links">
                        <a href="https://twitter.com/BrandonTheDev" target="_blank" className="f-ilink">
                            <i class="fa fa-xl fa-twitter-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/brandon-hogan-9994b0153/" target="_blank" className="f-ilink">
                            <i class="fa fa-xl fa-linkedin-square"></i>
                        </a>
                        <a href="https://github.com/bhogandev" target="_blank" className="f-ilink">
                            <i className="fa fa-xl fa-github-square"></i>
                        </a>
                    </div>
                </Row> 
            </Col>
            </Row>

            <hr style={{backgroundColor: 'gray', marginTop: '5%'}}/>
            <Row className='justify-content-center'>
            <p>
                &copy; Copyright 2022. Made by 
                     <b> Brandon Hogan</b>
            </p>
            </Row>
            </Container>
        </Container>
    )

}

export default Footer;