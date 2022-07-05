import React from "react";
import classes from "./Projects.module.css"

function Projects () {
    const projectList = [
        {
            name: "MOAT",
            language: "JavaScript",
            description: "A communication platform for landlords and tenants"
        }
    ]

    return (
        <div className="main-body">
            <div className="project-wrapper">
            {
                projectList.map(( {name, language, description } ) => (
                    <div className={classes.imageHolder}>
                        <img className={classes.projectImage} src='./assets/images/MOAT.png' alt={`${name} preview`}/>
                        <div className={classes.ProjectCard}>
                            <h4>{name}</h4>
                            <p>{description}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;