import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
                            <h1 className="h-lead" style={{color: 'white'}}>
                                I'm &nbsp;
                                <span style={{color: '#007BFF'}}>
                                Brandon Hogan
                                </span>
                            </h1>
                            <h3 className='h-body' style={{color: "#ffffff"}}>Building digital solutions with care and expertise. Full-stack software engineer with several years of experience, dedicated to crafting reliable websites and applications.</h3>
                        </Col>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                    <Link to="projects" spy={true} smooth={true} duration={50}>
                        <button className='bttn'>
                                Check out my work  
                                <ArrowDownwardIcon />
                        </button>
                    </Link>
                    </Row>
                </Container>
            </div>
            </div>
    )
}

export default Header;