import React from "react";
import classes from "./Footer.module.css"

function Footer() {
    return (
        <div className = {classes.Footer}>
                <p>An Application by TH</p>      
                <p>Built with React &trade; </p>
                <p >&copy; 2022</p>
        </div>
    )
};

export default Footer;