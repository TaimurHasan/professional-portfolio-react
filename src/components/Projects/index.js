import React from "react";
import classes from "./Projects.module.css"
import { AiFillGithub, AiFillRocket } from "react-icons/ai"
function Projects () {
    const projectList = [
        {
            name: "MOAT",
            language: "JavaScript",
            description: "A communication platform for landlords and tenants",
            background: "center",
            githubUrl: "https://github.com/utorteam11/MOAT",
            liveLink: "https://moatbyoceans11.herokuapp.com/"
        },
        {
            name: "TechTalk",
            language: "JavaScript",
            description: "A social media application for sharing blog posts, using user authentication",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TechTalk",
            liveLink: "https://techtalkbytaimur.herokuapp.com/"
        }
    ]

    return (
        <div className="main-body">
            <div className={classes.ProjectWrapper}>
            {
                projectList.map(( {name, language, description, background, githubUrl, liveLink } ) => (
                    <div className={classes.ProjectCard} style={{backgroundImage: `url(./assets/images/${name}.png)`, backgroundPosition: `${background}`}}>
                        <div className={classes.ProjectDetails}>
                            <div className = {classes.ProjectLinks}>
                                <h4>{name}</h4>
                                <div className={classes.LinkDiv}>
                                    <a title="GitHub Repository" href={`${githubUrl}`} target="_blank" rel="noreferrer">
                                        <AiFillGithub className = {classes.Link} size='35px'/>
                                    </a>
                                    <a title="GitHub Repository" href={`${liveLink}`} target="_blank" rel="noreferrer">
                                        <AiFillRocket className = {classes.Link} size='35px'/>
                                    </a>
                                </div>
                            </div>
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