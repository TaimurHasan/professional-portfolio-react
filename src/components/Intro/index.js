import React from "react";
import classes from "./Intro.module.css"
import { css } from 'aphrodite';

function Intro ({ setCurrentSection, styles }) {


    return(
        <div className={`main-body ${css(styles.fadeIn)}`}>
            <h3>Hi, I'm Taimur!</h3>
            <p>
                I am a Full-Stack Developer in Toronto, Canada 👋 
                <br/>
                <br/>
                Thank you for visiting my page! 
                I am a business school graduate and finance professional with a passion for technology and development. I enjoy using my fundamental business knowledge and consumer oriented experiences, 
                along with my knowledge of multiple technical languages, to create exceptional applications and unique solutions. I believe that my background in business has provided me with the perfect balance between cross-functional, collaborative work and a focused 'heads-down' approach to problem-solving.
            </p>
            <p className={classes.AboutLink}onClick={() => {
                setCurrentSection({ name: "About", description: "About Me"})
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
            }} >More about me &rarr;</p>
        </div>
    )
};

export default Intro;