import React from "react";
import classes from "./Hero.module.css"

function Hero (props) {
    const {
        currentSection
    } = props;

    return (

        <section className={classes.hero}>
            {!currentSection ? (
            <div className={classes.HeroContent}>
                <div className = {classes.HeroIntro}>
                    <h2>Full Stack Developer</h2>
                    <p>Currently Senior Finance Analyst @ Align Technology</p>
                    <p>A University of Toronto Full-Stack Development and Wilfrid Laurier Business school graduate with a passion for user-centric and scalable technology.</p>
                </div>
                <div>
                    <img className = {classes.HeroImage} src = "./assets/images/Headshot.jpg.jfif" />
                </div>
            </div>
            ) : (
                <div>ok</div>
            )}   
        </section>
    )
};

export default Hero;