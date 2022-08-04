import React from "react";
import classes from "./Intro.module.css"
import { css } from 'aphrodite';

function Intro ({ setCurrentSection, styles }) {


    return(
        <div className={`main-body ${css(styles.fadeIn)}`}>
            <div className={classes.IntroBody}>
                <h3>Hi, I'm Taimur!</h3>
                <p>
                    I am a Full-Stack Developer and Engineer from Toronto, Canada 👋 
                    <br/>
                    <br/>
                    
                    I am also a business school graduate and finance professional with years of experience in leading corporate process improvements, tool building, and system integrations. I enjoy using my fundamental business knowledge and consumer oriented experiences, 
                    along with my knowledge of multiple technical languages, to create exceptional applications and unique solutions to daily problems. 
                    <br/>
                    <br/>
                    I believe that my background in business has provided me with the perfect balance between cross-functional, collaborative work and a focused 'heads-down' approach to problem-solving.
                    <br/>
                    <br/>
                    Thank you for visiting my page!                
                </p>
                <p className={classes.AboutLink}onClick={() => {
                    setCurrentSection({ name: "About", description: "About Me"})
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }} >More about me &rarr;</p>
            </div>
        </div>
    )
};

export default Intro;