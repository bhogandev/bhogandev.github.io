import React from 'react';
import { useEffect } from 'react';
import Project from '../components/Project';
import {Container} from 'react-bootstrap';


var pJects;


const Projects = (props) => {
    
    function renderProjects(){

        if(pJects != null)
        {
        pJects = pJects.map(x => {
            return (
                <div>
                    <Project key={x.name} name={x.name} creator={x.creator} />
                </div>
            )
        });
        return pJects;
        } else {
            return <div>Currently Under Construction</div>
        }
    };

    return (
        <div className="main">
            <div className="hero">
                <Container style={{textAlign: 'center'}}>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">Projects</h1>
                    <h2 className="lead">Here you will find some of the personal and clients projects that I created with each project containing its own case study</h2>
                    <div style={{marginTop: '3%'}}>
                        {renderProjects()}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Projects;