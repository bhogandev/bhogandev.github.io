import React from 'react';
import { useEffect } from 'react';

const Blog = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | Blog";
    });

    return (
        <div className="main">
            <h1>Blog</h1>
            Currently Under Construction.
        </div>
    )
}

export default Blog;
