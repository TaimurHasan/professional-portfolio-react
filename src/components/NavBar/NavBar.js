import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import classes from './NavBar.module.css';

function NavBar ({ history }) {
    return (
        <div className={classes.NavBar}>
            <a href="./"> 
                <h1>Taimur Hasan</h1>
            </a>
            {/* <Navigation /> */}
            <MobileNavigation history={history} />
        </div>
    )
};

export default NavBar;