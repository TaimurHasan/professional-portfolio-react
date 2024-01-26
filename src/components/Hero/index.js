import React from "react";
import classes from "./Hero.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import headshot from '../../images/Headshot.webp'
import {motion} from 'framer-motion';
import Button from "../Button";

function Hero (props) {

    return (

        <section className={classes.hero}>
                <motion.div initial={{opacity: 0, y: -70}} animate={{opacity: 1, y: 0}} transition={{duration: 1}} className={classes.HeroContent}>
                    <div className = {classes.HeroIntro}>
                        <h2 className={classes.HeadingIntro}>👋 Hi, I'm Taimur</h2>
                        <h2 className={classes.typeAnimation}>I'm a full stack engineer, frontend designer, and problem solver.</h2>
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
                    <Button 
                        nextPage={'about'}
                        forward={true}
                        text={'About Me'}
                        {...props}
                    />
                </motion.div>
        </section>

    )
};

export default Hero;