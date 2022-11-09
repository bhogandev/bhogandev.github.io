import React from 'react';

const Project = (props) => {

    return (
        <div>
            this is project named {props.name} and was created by {props.creator}.
        </div>
    )
}

export default Project;