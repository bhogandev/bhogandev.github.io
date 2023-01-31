import React, { useState } from 'react';
import { useEffect } from 'react';
import Project from '../components/Project';
import {Col, Row, Container} from 'react-bootstrap';
import retrieveRepos from '../middleware/githubAPI';


var pJects;

async function getRepos(){
    return await retrieveRepos().then(data => { return data});
}


const Projects = (props) => {
    const [gitProjects, setGitProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
 
    
    async function renderProjects(){

        pJects = await (await getRepos()).data;

        if(await pJects != null)
        {
        var tempgitProjects = Object.entries(pJects);

         tempgitProjects.map(x => {
            if(!x[1].private){

            const projectName = x[1].name.replace(/\./g, '_');

            gitProjects.push(
                <div>
                    <Project className="project-card" key={x[1].id} name={x[1].name} thumbnail={projectName + "_thumbnail.png"} description={x[1].description} gitLink={x[1].html_url}/>
                </div>
            )}});

        setIsLoading();
        return gitProjects;
        } else {
            return <div>Currently Under Construction</div>
        }
    };

    renderProjects();
    if(!isLoading)
    {

    return (
        <div className="main">
            <div className="hero">
                <Container style={{textAlign: 'center'}} fluid>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">Projects</h1>
                    <h2 className="lead">Here you will find some of the personal and clients projects that I created with each project containing its own case study</h2>
                    <div style={{marginTop: '3%'}}>
                        <Row>
                        {gitProjects}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    )
    }else {
       return (
        <div className="main">
            <div className="hero">
                <Container style={{textAlign: 'center'}}>
                    {/* This is where the header profile image will go */}
                    <h1 className="h-title">Projects</h1>
                    <div style={{marginTop: '3%'}}>
                        <div>Currently Under Construction</div>
                    </div>
                </Container>
            </div>
        </div>
       )
    }
}

export default Projects;