import React from "react";
import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';

function Navigation (props) {
    const {
        currentSection,
        setCurrentSection
    } = props;

    return (
        <nav className={classes.Navigation}>
            <NavLinks currentSection={currentSection} setCurrentSection={setCurrentSection}/>
        </nav>
    );
};

export default Navigation;