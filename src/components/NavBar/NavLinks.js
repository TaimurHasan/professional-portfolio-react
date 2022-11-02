import React, { useState } from "react"
import {motion} from 'framer-motion'
import classes from './NavBar.module.css'
import { Link } from 'react-scroll';

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
    
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
            <ul className={classes.NavList}>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
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
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.20}}
                >
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="about" spy={true} smooth={true}> 
                        About
                    </Link>
                </motion.li>
                <motion.li 
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay: 0.30}}
                >
                    <Link onClick={() => props.isMobile && props.closeMobileMenu()} to="projects" spy={true} smooth={true}> 
                        Projects
                    </Link>
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