import React from "react";
import classes from "./Projects.module.css"
import { AiFillGithub, AiFillRocket } from "react-icons/ai"
import { css } from 'aphrodite';


function Projects ({ styles }) {
    const projectList = [
        {
            name: "MOAT",
            keyId: 1,
            technologies: "Express, Node, Handlebars, MySQL",
            description: "A custom rental property management tool to streamline communication between landlords and tenants",
            background: "45%",
            githubUrl: "https://github.com/utorteam11/MOAT",
            liveLink: "https://moatbyoceans11.herokuapp.com/"
        },
        {
            name: "DeepThoughts",
            keyId: 2,
            technologies: "MERN Stack, GraphQL",
            description: "A social network designed to interact with friends and their thoughts/reactions.",
            background: "4%",
            githubUrl: "https://github.com/TaimurHasan/deep-thoughts",
            liveLink: "https://deepthoughtsbytaimur.herokuapp.com/"
        },
        {
            name: "ShopShop",
            keyId: 3,
            technologies: "MERN Stack, Redux, GraphQL",
            description: "An ecommerce project allowing users to add items to cart and checkout.",
            background: "30%",
            githubUrl: "https://github.com/TaimurHasan/shop-shop",
            liveLink: "https://shopshopbytaimur.herokuapp.com/"
        },
        {
            name: "Cineflex",
            keyId: 4,
            technologies: "MERN Stack, GraphQL",
            description: "A social network designed for movie lovers to view and post reviews on their favorite films.",
            background: "50%",
            githubUrl: "https://github.com/Project3MERN/Project-3-MERN",
            liveLink: "https://frozen-oasis-34307.herokuapp.com/"
        },
        {
            name: "TechTalk",
            keyId: 5,
            technologies: "Express, Node, Handlebars, MySQL",
            description: "A social media application to share blog posts with family and friends with using user authentication.",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TechTalk",
            liveLink: "https://techtalkbytaimur.herokuapp.com/"
        },
        {
            name: "ETS",
            keyId: 6,
            technologies: "Express, Node, MySQL",
            description: "A SQL command-line application to track an organization's employees, roles, and departments",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/EmployeeTrackingSystem",
            liveLink: "https://drive.google.com/file/d/1CPpJXRsHzH_tuJkjUKHQ9GjNk0Pf-OMg/view"
        },
        {
            name: "SocialNetworkAPI",
            keyId: 7,
            technologies: "Express, Node, MongoDB",
            description: "A NoSQL backend framework, which allows developers to quickly set up a social network application with users, thoughts, friends, and reactions.",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/NoSQLSocialNetworkAPI",
            liveLink: "https://drive.google.com/file/d/1bqiapqHw9yDlO84SPuwPotnY13zmf-oj/view"
        },
        {
            name: "TeamProfileCreator",
            keyId: 8,
            technologies: "Node, jest, inquirer",
            description: "A SQL command-line application to efficiently generate a profile website for a team, after answering prompts",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TeamProfileCreator",
            liveLink: "https://drive.google.com/file/d/15AZdnEGZYQ5K82kN9YVn-1ZhG7vHX41N/view"
        },
        {
            name: "WeatherDashboard",
            keyId: 9,
            technologies: "Vanilla Javascript, Third-Party APIs",
            description: "An application built using data from OpenWeather's API, allowing users view current and forecasted weather data",
            background: "left",
            githubUrl: "https://github.com/TaimurHasan/TheWeatherDashboard",
            liveLink: "https://taimurhasan.github.io/TheWeatherDashboard/"
        }
    ]

    return (
        <div className="main-body">
                <div className={`${classes.ProjectWrapper} ${css(styles.fadeIn)}`}>
                {
                    projectList.map(( {name, keyId, technologies, description, background, githubUrl, liveLink } ) => (
                        <div key = {keyId} className={classes.ProjectCard} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${name}.png)`, backgroundPosition: `${background}`}}>
                            <div className={classes.ProjectDetails}>
                                <div className = {classes.ProjectLinks}>
                                    <h4>
                                        <a title="Go To Project" href={`${githubUrl}`} target="_blank" rel="noreferrer">
                                            {name}
                                        </a>    
                                    </h4>
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