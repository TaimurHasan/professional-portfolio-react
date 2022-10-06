import React from "react";
import classes from "./Hero.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import headshot from '../../images/Headshot.jpg'
import {motion} from 'framer-motion';

function Hero (props) {


    const {
        currentSection
    } = props;

    return (

        <section className={classes.hero} style = {currentSection && {height: "260px"}}>
            {currentSection ? (
                <div className={classes.HeroContent} style={{justifyContent:"center"}}>
                    <div className = {classes.HeroIntro}>
                        <h2 className={`${classes.HeadingIntro} ${classes.SectionIntro}`} style={{textAlign: "center"}}>{currentSection.description}</h2>                    
                    </div>
                </div>
            ) : (
                <motion.div initial={{opacity: 0, y: -70}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className={classes.HeroContent}>
                    <div className = {classes.imageContainer}>
                        <img alt="taimur hasan's headshot" className = {classes.HeroImage} src = {headshot} />
                    </div>
                    <div className = {classes.HeroIntro}>
                        <h2 className={classes.typeAnimation}>👋 Hi, I'm Taimur</h2>
                        <h2 className={classes.HeadingIntro}>Full Stack Engineer</h2>
                        <p>Currently Senior Analyst @ Align Technology</p>
                        <p>A University of Toronto Full-Stack Development and Wilfrid Laurier Business school graduate with a passion for user-centric and scalable technology.</p>
                        <div className = {classes.HeroLinks}> 
                            <a href="https://www.linkedin.com/in/taimur-h/" title="LinkedIn" target="_blank" rel="noreferrer">
                             <AiFillLinkedin className = {classes.Link} style={{marginLeft:"0px"}}/>
                            </a>
                            <a href="https://github.com/TaimurHasan" title="GitHub" target="_blank" rel="noreferrer">
                             <AiFillGithub className = {classes.Link}  />
                            </a>
                            <a href="https://twitter.com/taimur_coding" title="Twitter" target="_blank" rel="noreferrer">
                             <AiFillTwitterSquare className = {classes.Link}  />
                            </a>
                            <a href="mailto:taimurhasan11@gmail.com" title="Email" target="_blank" rel="noreferrer">
                             <HiOutlineMail className = {classes.Link}  />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}   
        </section>

    )
};

export default Hero;