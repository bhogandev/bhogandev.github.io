import React, { useState, useEffect } from 'react';
import Project from '../components/Project';
import { Row, Container, Col } from 'react-bootstrap';
import retrieveRepos from '../middleware/githubAPI';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import { Carousel } from 'react-responsive-carousel';

async function getRepos() {
  return await retrieveRepos().then(data => { return data });
}

const Projects = (props) => {
  const [gitProjects, setGitProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const projectsData = await getRepos();
      if (projectsData && projectsData.data) {
        const filteredProjects = Object.entries(projectsData.data)
          .filter(([key, value]) => !value.private)
          .map(([key, value]) => ({
            id: value.id,
            name: value.name,
            thumbnail: value.name.replace(/\./g, '_') + "_thumbnail.png",
            description: value.description,
            gitLink: value.html_url
          }));
        setGitProjects(filteredProjects);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="main">
          <Container className='hero' style={{ textAlign: 'center', color: '#FFFFFF'}} >
            <h1 className="h-title">Projects</h1>
            <div style={{ marginTop: '3%' }}>
              <div>Currently Under Construction</div>
            </div>
          </Container>
      </div>
    );
  }

  return (
    <div className="" style={{marginTop: '120vh'}}>
        <Container className='hero' style={{color: '#FFFFFF'}}>
          <Row className='justify-content-center'>
          <h1 className="h-title">Projects</h1>
          </Row>
          <Row>
          <h2 className="lead">Here you will find some of the personal and clients projects that I created with each project containing its own case study</h2>
          </Row>
          <Row className='justify-content-center'>
          <div style={{ marginTop: '20vh' }}>
            <Carousel showArrows={true} swipeable={true} emulateTouch={true} infiniteLoop={true}>
              {gitProjects.map(project => (
                <Project className="project-card" key={project.id} name={project.name} thumbnail={project.thumbnail} description={project.description} gitLink={project.gitLink} />
              ))}
            </Carousel>
          </div>
          </Row>
        </Container>
      </div>
  );
};

export default Projects;
