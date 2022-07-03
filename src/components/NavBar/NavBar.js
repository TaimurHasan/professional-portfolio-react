import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import classes from './NavBar.module.css';

function NavBar (props) {
    const {
        currentSection,
        setCurrentSection
    } = props;

    return (
        <div className={classes.NavBar}>
            <a href="/"> 
                <h1>Taimur Hasan</h1>
            </a>
            <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            <MobileNavigation />
        </div>
    )
};

export default NavBar;