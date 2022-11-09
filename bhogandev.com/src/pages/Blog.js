import React from 'react';
import { useEffect } from 'react';
import {Container} from 'react-bootstrap';

const Blog = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | Blog";
    });

    return (
        <div className="main">
            <div className="header">
                <Container>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">Blog</h1>
                    <h2 className="h-lead">Writings of mine. Enjoy the read!</h2>
                </Container>
            </div>
            <Container className="sub-cat">
                Currently Under Construction.
            </Container>
        </div>
    )
}

export default Blog;
