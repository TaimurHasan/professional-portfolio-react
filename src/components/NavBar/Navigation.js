import React from "react";
import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';

function Navigation ({ showAbout }) {

    return (
        <nav className={classes.Navigation}>
            <NavLinks showAbout={showAbout}/>
        </nav>
    );
};

export default Navigation;