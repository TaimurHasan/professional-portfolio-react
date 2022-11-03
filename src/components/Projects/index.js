import React from "react";
import classes from "./Projects.module.css"
import { AiFillGithub } from "react-icons/ai"
import {motion} from 'framer-motion';

// project images
import FiredUp from '../../images/firedup.webp'
import MOAT from '../../images/MOAT.webp'
import DeepThoughts from '../../images/DeepThoughts.webp'
// import ShopShop from '../../images/ShopShop.png'
// import Cineflex from '../../images/Cineflex.png'
// import ETS from '../../images/ETS.png'
// import TechTalk from '../../images/TechTalk.png'
// import TeamProfileCreator from '../../images/TeamProfileCreator.png'
// import WeatherDashboard from '../../images/WeatherDashboard.png'


function Projects () {
    const animateFrom = {opacity: 0}
    const animateTo = {opacity: 1}

    const projectList = [
        {
            name: "firedup",
            keyId: 7,
            technologies: "MERN Stack, GraphQL",
            description: "A friend-based social network to encourage and streamline event planning and scheduling.",
            background: "50%",
            githubUrl: "https://github.com/TaimurHasan/firedup",
            liveLink: "https://firedupbytaimur.herokuapp.com/",
            image: FiredUp,
            delay: 0.20
        },
        {
            name: "MOAT",
            keyId: 1,
            technologies: "Express, Node, Handlebars, MySQL",
            description: "A custom rental property management tool to streamline communication between landlords and tenants",
            background: "45%",
            githubUrl: "https://github.com/utorteam11/MOAT",
            liveLink: "https://moatbyoceans11.herokuapp.com/",
            image: MOAT,
            delay: 0.40
        },
        {
            name: "DeepThoughts",
            keyId: 2,
            technologies: "MERN Stack, GraphQL",
            description: "A social network designed to interact with friends and their thoughts/reactions.",
            background: "4%",
            githubUrl: "https://github.com/TaimurHasan/deep-thoughts",
            liveLink: "https://deepthoughtsbytaimur.herokuapp.com/",
            image: DeepThoughts,
            delay: 0.60
        },
        // {
        //     name: "ShopShop",
        //     keyId: 3,
        //     technologies: "MERN Stack, Redux, GraphQL",
        //     description: "An ecommerce project allowing users to add items to cart and checkout.",
        //     background: "30%",
        //     githubUrl: "https://github.com/TaimurHasan/shop-shop",
        //     liveLink: "https://shopshopbytaimur.herokuapp.com/",
        //     image: ShopShop,
        //     delay: 0.80
        // },
        // {
        //     name: "Cineflex",
        //     keyId: 4,
        //     technologies: "MERN Stack, GraphQL",
        //     description: "A social network designed for movie lovers to view and post reviews on their favorite films.",
        //     background: "50%",
        //     githubUrl: "https://github.com/Project3MERN/Project-3-MERN",
        //     liveLink: "https://frozen-oasis-34307.herokuapp.com/",
        //     image: Cineflex,
        //     delay: 1
        // },
        // {
        //     name: "TechTalk",
        //     keyId: 5,
        //     technologies: "Express, Node, Handlebars, MySQL",
        //     description: "A social media application to share blog posts with family and friends with using user authentication.",
        //     background: "left",
        //     githubUrl: "https://github.com/TaimurHasan/TechTalk",
        //     liveLink: "https://techtalkbytaimur.herokuapp.com/",
        //     image: TechTalk,
        //     delay: 1.2
        // },
        // {
        //     name: "ETS",
        //     keyId: 6,
        //     technologies: "Express, Node, MySQL",
        //     description: "A SQL command-line application to track an organization's employees, roles, and departments",
        //     background: "left",
        //     githubUrl: "https://github.com/TaimurHasan/EmployeeTrackingSystem",
        //     liveLink: "https://drive.google.com/file/d/1CPpJXRsHzH_tuJkjUKHQ9GjNk0Pf-OMg/view",
        //     image: ETS,
        //     delay: 1.4
        // },
        // {
        //     name: "TeamProfileCreator",
        //     keyId: 8,
        //     technologies: "Node, jest, inquirer",
        //     description: "A SQL command-line application to efficiently generate a profile website for a team, after answering prompts",
        //     background: "left",
        //     githubUrl: "https://github.com/TaimurHasan/TeamProfileCreator",
        //     liveLink: "https://drive.google.com/file/d/15AZdnEGZYQ5K82kN9YVn-1ZhG7vHX41N/view",
        //     image: TeamProfileCreator,
        //     delay: 1.6
        // },
        // {
        //     name: "WeatherDashboard",
        //     keyId: 9,
        //     technologies: "Vanilla Javascript, Third-Party APIs",
        //     description: "An application built using data from OpenWeather's API, allowing users view current and forecasted weather data",
        //     background: "left",
        //     githubUrl: "https://github.com/TaimurHasan/TheWeatherDashboard",
        //     liveLink: "https://taimurhasan.github.io/TheWeatherDashboard/",
        //     image: WeatherDashboard,
        //     delay: 1.8
        // }
    ]

    return (
        <motion.div initial={{opacity: 0, x: -40}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} className="main-body">
                <h2 className={classes.projectHeader}>Top Projects</h2>
                <div className={`${classes.ProjectWrapper}`}>
                {
                    projectList.map(( {name, keyId, technologies, description, background, githubUrl, liveLink, image, delay } ) => (
                        <motion.div 
                            initial={animateFrom}
                            animate={animateTo}
                            key = {keyId}
                            className={classes.ProjectCard}
                            transition={{ duration: 1, delay: delay }}
                            style={{backgroundImage: `url(${image})`, backgroundPosition: `${background}`}}
                        >
                            <div className={classes.ProjectDetails}>
                                <div className = {classes.ProjectLinks}>
                                    <h4>
                                        <a title="Go To Project" href={`${liveLink}`} target="_blank" rel="noreferrer">
                                            {name}
                                        </a>    
                                    </h4>
                                    <div className={classes.LinkDiv}>
                                        <a title="GitHub Repository" href={`${githubUrl}`} target="_blank" rel="noreferrer">
                                            <AiFillGithub className = {classes.Link}/>
                                        </a>
                                    </div>
                                </div>
                                <p>{description}</p>
                                <p>Uses: {technologies}</p>
                            </div>
                        </motion.div>
                    ))
                }
                </div>
        </motion.div>
    )
}

export default Projects;