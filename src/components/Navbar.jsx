import React, { useState } from 'react'
import { Link } from "react-scroll";

const NavbarLinks = ({menuState}) => (
    <>
        <Link
            activeClass="active"
            className="link-navbar"
            to="projects"
            smooth={true}
            duration={500}
            onClick={menuState}
        >
            Projects
        </Link>
        <Link
            activeClass="active"
            className="link-navbar"
            to="about"
            smooth={true}
            duration={500}
            onClick={menuState}
        >
            About
        </Link>
        <Link
            activeClass="active"
            className="link-navbar"
            to="contact"
            smooth={true}
            duration={500}
            onClick={menuState}
        >
            Contact
        </Link>
    </>
);

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(isOpen === false ? true : false);

    return (
        <>
            <nav className="menu-container">
                <Link
                    className="logo"
                    to="home"
                    smooth={true}
                    duration={500}
                >
                    <img src="M Monogram_2.svg" alt="logo" />
                </Link>
                <div className="devider"></div>
                <NavbarLinks />
                <button class={`hamburger hamburger--spring ${isOpen === true ? 'is-active' : null}`} type="button" onClick={toggleMenu}
                aria-label="Menu" aria-controls="navigation">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
            <nav className={`menu-container mobile ${isOpen === true ? 'is-open' : null}`}>
                <NavbarLinks menuState={toggleMenu} />
            </nav>
        </>
    )
};

export default Navbar;