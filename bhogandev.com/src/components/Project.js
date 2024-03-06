import React from 'react';

const Project = (props) => {
  return (
    <div className="project-container my-3" style={{ width: '100%', textAlign: 'center' }}>
      <div className="project-body" style={{ maxWidth: '80%', margin: '0 auto' }}>
        <h3 className="project-title">{props.name}</h3>
        <p className="project-description">{props.description}</p>
        <button className="btn btn-primary" onClick={() => window.open(props.gitLink, "_blank")}>See The Code</button>
      </div>
    </div>
  )
}

export default Project;
