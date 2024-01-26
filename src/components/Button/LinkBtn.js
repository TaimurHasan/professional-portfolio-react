import React from "react";
import classes from './Button.module.css';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const LinkBtn = (props) => {
    const {
        text,
        forward,
        link,
    } = props;

    return(
        <div className={classes.NavBtns}>
            <a className={classes.AboutLink} href={link} target="_blank" rel="noreferrer">
                    {forward ? (
                        <>
                            {text}
                            <BsFillArrowRightCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    :  
                    (
                        <>
                            Read More
                            <BsFillArrowLeftCircleFill className={classes.btnArrow}/>
                        </>
                    )
                    } 
            </a>
        </div>
    )
};

export default LinkBtn;

