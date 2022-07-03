import React from "react"
import {motion} from 'framer-motion'
import classes from './NavBar.module.css'

function NavLinks (props) {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    const {
        currentSection,
        setCurrentSection
    } = props;

    return (
            <ul className={classes.NavList}>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}}
                >
                    <a href="/">Home</a>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                >
                    <a 
                        onClick={() => {
                            setCurrentSection({ name: "About" })
                            console.log(currentSection)
                        }}
                    >
                        About
                    </a>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                >
                    <a href="/">Work</a>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                >
                    <a href="/">Resume</a>
                </motion.li>
            </ul>
    )
}

export default NavLinks;