import React from "react";
import classes from "./Intro.module.css"
// import { RiReactjsFill } from 'react-icons/ri'
// import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
// import { DiMongodb } from 'react-icons/di'
// import { SiRedux } from 'react-icons/si'
import taimurIntro from '../../images/taimurIntro.webp'
import Button from "../Button";
import {motion} from 'framer-motion';

// logos were removed due to performance, will be re-implemented as SVGs

function Intro ({ showAbout, setShowAbout }) {
    const animateFrom = {opacity: 0, x: -40}
    const animateTo = {opacity: 1, x: 0}

    return(
        <motion.div initial={animateFrom} animate={animateTo} transition={{duration: 1}} className={`main-body`}>
            <h1 className={classes.aboutHeading}>About Me</h1>
            <div className={classes.aboutContainer}>
                <img className={classes.introCode} src={taimurIntro} alt="javascript code highlighting an introduction to taimur"/>
                <div className={classes.IntroBody}>
                    <p>
                        I'm a Toronto-based full stack engineer who specializes in designing and building fantastic user experiences using React, JavaScript, and the MERN Stack. 
                        I am also a business school graduate and finance professional with years of experience in leading corporate process improvements, tool building, and system integrations.
                        <br/>
                        <br/>
                        I do not consider myself as someone who writes code, but as someone who solves problems using technology.
                    </p>
                    <Button showAbout={showAbout} setShowAbout={setShowAbout}/>
                </div>
                {/* <div className={classes.logoContainer}>
                    <IoLogoJavascript className={classes.logo} />
                    <RiReactjsFill className={classes.logo} />
                    <SiRedux className={classes.logo} />
                    <IoLogoNodejs className={classes.logo} />
                    <DiMongodb className={classes.logo} />
                </div> */}
            </div>
            <div className={classes.projectStart} id="button"></div>
        </motion.div>
    )
};

export default Intro;