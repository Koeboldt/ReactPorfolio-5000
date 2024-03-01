import React from 'react';
import ProjectCard from '../components/UI/ProjectCard';
import projects from '../components/UI/Projects';

const MyProjects= () => {
    return (
        <div> 
            <h2>My Work</h2>
            {projects.map((project) =>
                <ProjectCard key={project.id} name={project.name} description={project.description} link={project.link} image={project.image} />  
        )}
        </div>

    )
}

export default MyProjects;