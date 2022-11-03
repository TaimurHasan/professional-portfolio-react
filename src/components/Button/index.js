import React from "react";
import classes from './Button.module.css';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Button = ({ showAbout, setShowAbout }) => {
    return(
        <div className={classes.NavBtns}>
            <Link to={showAbout ? "about" : "button"} smooth={true} className={`${classes.AboutLink} ${showAbout && classes.AboutLinkClicked}`} onClick={() => setShowAbout(!showAbout)}> 
                    {showAbout ? (
                        <>
                            Read Less
                            <BsFillArrowUpCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    :  
                    (
                        <>
                            Read More
                            <BsFillArrowDownCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    } 
            </Link>
        </div>
    )
};

export default Button;

