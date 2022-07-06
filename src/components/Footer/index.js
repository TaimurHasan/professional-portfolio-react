import React from "react";
import classes from "./Footer.module.css"

function Footer() {
    return (
        <div className = {classes.Footer}>
            <div className = {classes.FootNote}>
                <p>Built with React &trade; </p>
                <p >&copy; 2022</p>
            </div>
        </div>
    )
};

export default Footer;