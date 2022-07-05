import React from "react";
import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';

function Navigation (props) {
    const {
        setCurrentSection
    } = props;

    return (
        <nav className={classes.Navigation}>
            <NavLinks setCurrentSection={setCurrentSection}/>
        </nav>
    );
};

export default Navigation;