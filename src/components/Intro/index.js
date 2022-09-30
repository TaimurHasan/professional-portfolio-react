import React from "react";
import classes from "./Intro.module.css"
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { css } from 'aphrodite';

function Intro ({ setCurrentSection, styles }) {


    return(
        <div className={`main-body ${css(styles.fadeIn)}`}>
            <div className={classes.IntroBody}>
                <h3>About Me</h3>
                <p>
                    I'm a Toronto-based full stack engineer who specializes in designing and building fantastic user experiences using React, JavaScript, and the MERN Stack. 
                    <br/>
                    <br/>
                    I am also a business school graduate and finance professional with years of experience in leading corporate process improvements, tool building, and system integrations.
                </p>
                <div className={classes.NavBtns}>
                    <button className={classes.AboutLink}onClick={() => {
                        setCurrentSection({ name: "About", description: "About Me"})
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    }} >More About <BsFillArrowRightCircleFill className={classes.btnArrow}/></button>
                    <button className={classes.AboutLink}onClick={() => {
                        setCurrentSection({ name: "Work", description: "My Work & Projects"})
                        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                    }} >Portfolio <BsFillArrowRightCircleFill className={classes.btnArrow}/></button>
                </div>
            </div>
        </div>
    )
};

export default Intro;