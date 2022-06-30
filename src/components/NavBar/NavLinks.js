import React from "react"
import {motion} from 'framer-motion'

function NavLinks (props) {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}


    return (
        <ul>
            <motion.li 
                onClick={() => props.isMobile && props.closeMobileMenu()}
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
            >
                <a href="/">About Me</a>
            </motion.li>
        </ul>
    )
}

export default NavLinks;