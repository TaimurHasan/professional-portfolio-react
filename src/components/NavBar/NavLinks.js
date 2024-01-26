import React from "react"
import {motion} from 'framer-motion'
import classes from './NavBar.module.css'
import { Link } from 'react-scroll';

function NavLinks (props) {
    const animateFrom = {opacity: 0, y: -40, padding: 13}
    const animateTo = {opacity: 1, y: 0, padding: 13}
    return (
        <>
            <ul className={classes.NavList}>
                <motion.li 
                    onClick={() => { 
                        props.closeMobileMenu();
                        props.history.push('/');
                    }}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.10}}
                >
                    <span 
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}
                    >
                        Home
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => { 
                        props.closeMobileMenu();
                        props.history.push('/about');
                    }}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                >
                    <span 
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}
                    >
                        About
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => { 
                        props.closeMobileMenu();
                        props.history.push('/projects');
                    }}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                >
                    <span 
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                        }}
                    >
                        Projects
                    </span>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.40}}
                >
                    <a href="https://drive.google.com/file/d/1eWWduh1C5Ep5X5wG-uTGXHguErlypIAq/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                </motion.li>
            </ul>
        </>
    )
}

export default NavLinks;