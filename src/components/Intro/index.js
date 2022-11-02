import React from "react";
import classes from "./Intro.module.css"
import { RiReactjsFill } from 'react-icons/ri'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { DiMongodb } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
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
            <div>
                <IoLogoJavascript className={classes.logo} />
                <RiReactjsFill className={classes.logo} />
                <SiRedux className={classes.logo} />
                <IoLogoNodejs className={classes.logo} />
                <DiMongodb className={classes.logo} />
            </div>
        </motion.div>
    )
};

export default Intro;