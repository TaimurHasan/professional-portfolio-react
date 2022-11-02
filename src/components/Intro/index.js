import React from "react";
import classes from "./Intro.module.css"
import About from "../About";
import {motion} from 'framer-motion';

function Intro () {
    const animateFrom = {opacity: 0, x: -40}
    const animateTo = {opacity: 1, x: 0}

    return(
        <motion.div initial={animateFrom} animate={animateTo} transition={{duration: 1}} className={`main-body`}>
            <div className={classes.IntroBody}>
                <h3>About Me</h3>
                <p>
                    I'm a Toronto-based full stack engineer who specializes in designing and building fantastic user experiences using React, JavaScript, and the MERN Stack. 
                    <br/>
                    <br/>
                    I am also a business school graduate and finance professional with years of experience in leading corporate process improvements, tool building, and system integrations.
                </p>
            </div>
        </motion.div>
    )
};

export default Intro;