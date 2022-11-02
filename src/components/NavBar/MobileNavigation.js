import React, { useState } from "react";
import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

function MobileNavigation ({ showAbout }) {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = 
    <AiOutlineMenu className = {classes.Hamburger} size='40px'
        onClick={() => setOpen(!open)}
    />

    const closeIcon = 
    <AiOutlineClose className = {classes.Hamburger} size='40px'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => {
        setOpen(false);
    }
    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks showAbout={showAbout} isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
    )
}

export default MobileNavigation;