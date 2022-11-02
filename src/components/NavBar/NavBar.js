import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import classes from './NavBar.module.css';

function NavBar ({ showAbout }) {
    return (
        <div className={classes.NavBar}>
            <a href="./"> 
                <h1>Taimur Hasan</h1>
            </a>
            <Navigation showAbout={showAbout}/>
            <MobileNavigation showAbout={showAbout}/>
        </div>
    )
};

export default NavBar;