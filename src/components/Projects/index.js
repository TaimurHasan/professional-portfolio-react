import React from "react";
import classes from "./Projects.module.css"
import { AiFillGithub, AiFillRocket } from "react-icons/ai"
function Projects () {
    const projectList = [
        {
            name: "MOAT",
            technologies: "Express, Node, Handlebars, MySQL",
            description: "A custom rental property management tool to streamline communication between landlords and tenants",
            background: "center",
            githubUrl: "https://github.com/utorteam11/MOAT",
            liveLink: "https://moatbyoceans11.herokuapp.com/"
        },
        {
            name: "TechTalk",
            technologies: "Express, Node, Handlebars, MySQL",
            description: "A social media application to share blog posts with family and friends with using user authentication.",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TechTalk",
            liveLink: "https://techtalkbytaimur.herokuapp.com/"
        },
        {
            name: "ETS",
            technologies: "Express, Node, MySQL",
            description: "A SQL command-line application to track an organization's employees, roles, and departments",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/EmployeeTrackingSystem",
            liveLink: "https://drive.google.com/file/d/1CPpJXRsHzH_tuJkjUKHQ9GjNk0Pf-OMg/view"
        },
        {
            name: "SocialNetworkAPI",
            technologies: "Express, Node, MongoDB",
            description: "A NoSQL backend framework, which allows developers to quickly set up a social network application with users, thoughts, friends, and reactions.",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/NoSQLSocialNetworkAPI",
            liveLink: "https://drive.google.com/file/d/1bqiapqHw9yDlO84SPuwPotnY13zmf-oj/view"
        },
        {
            name: "TeamProfileCreator",
            technologies: "Node, jest, inquirer",
            description: "A SQL command-line application to quickly and efficiently generate a profile website for a team, after answering prompts",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TeamProfileCreator",
            liveLink: "https://drive.google.com/file/d/15AZdnEGZYQ5K82kN9YVn-1ZhG7vHX41N/view"
        },
        {
            name: "WeatherDashboard",
            technologies: "Javascript, Third-Party APIs",
            description: "A js application built using data from OpenWeather's API, allowing users to enter a city and view its relevant current and forecasted weather data",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TheWeatherDashboardr",
            liveLink: "https://taimurhasan.github.io/TheWeatherDashboard/"
        }
    ]

    return (
        <div className="main-body">
            <div className={classes.ProjectWrapper}>
            {
                projectList.map(( {name, technologies, description, background, githubUrl, liveLink } ) => (
                    <div className={classes.ProjectCard} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${name}.png)`, backgroundPosition: `${background}`}}>
                        <div className={classes.ProjectDetails}>
                            <div className = {classes.ProjectLinks}>
                                <h4>{name}</h4>
                                <div className={classes.LinkDiv}>
                                    <a title="GitHub Repository" href={`${githubUrl}`} target="_blank" rel="noreferrer">
                                        <AiFillGithub className = {classes.Link} size='30px'/>
                                    </a>
                                    <a title="Live Deployment or Walkthrough" href={`${liveLink}`} target="_blank" rel="noreferrer">
                                        <AiFillRocket className = {classes.Link} size='30px'/>
                                    </a>
                                </div>
                            </div>
                            <p>{description}</p>
                            <p>Uses: {technologies}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;