import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';


const NotFound = (props) => {

    return(
        <div className="main">
            <div className="header">
                <Container>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">404</h1>
                    <p>The page you have navigated to does not exist. Click <Link to="/">here</Link> to head home.</p>
                </Container>
            </div>
        </div>
    )

}

export default NotFound;