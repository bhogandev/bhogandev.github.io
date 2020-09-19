import React from 'react';
import { useEffect } from 'react';

const Projects = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | Projects";
    });

    return (
        <div className="main">
            <h1>Projects</h1>
            Currently Under Construction.
        </div>
    )
}

export default Projects;