import React, { useState } from "react"
import {motion} from 'framer-motion'
import classes from './NavBar.module.css'

function NavLinks (props) {
    const animateFrom = {opacity: 0, y: -40, padding: 13}
    const animateTo = {opacity: 1, y: 0, padding: 13}

    const {
        setCurrentSection
    } = props;

    const [sections] = useState([
        { 
          name: 'About',
          description: 'About Me' 
        },
        { name: 'Work',
          description: 'My Work & Projects' 
        }
    ])
    

    return (
            <ul className={classes.NavList}>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}}
                >
                    <a href="./">Home</a>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                >
                    <span 
                        onClick={() => {
                            setCurrentSection(sections[0])
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}
                    >
                        About
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                >
                    <span
                        onClick={() => {
                            setCurrentSection(sections[1])
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}
                    >
                        Work
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                >
                    <a href="https://drive.google.com/file/d/1jXpKV-Xj5e58cYxwdn6WFhXVhExX4GBT/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </motion.li>
            </ul>
    )
}

export default NavLinks;