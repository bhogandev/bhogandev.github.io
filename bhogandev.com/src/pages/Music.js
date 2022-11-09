import React from 'react';
import { Container } from 'react-bootstrap';
import {useEffect} from 'react';

const Music = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | Music";
    });

    return(
        <div className="main">
            <div className="header">
                <Container>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">Music</h1>
                    <h2 className="h-lead">Here are some of the music projects that I've worked on!</h2>
                </Container>
            </div>
            <Container className="sub-cat">
                Currently Under Construction.
            </Container>
        </div>
    )
}

export default Music;