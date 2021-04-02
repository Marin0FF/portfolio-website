import React from 'react';

const Navbar = () => (
    <>
        <nav className="menuContainer">
            <div className="logo mx-2"><img src="M Monogram_2.svg" alt="logo" /></div>
            <div className="devider"></div>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

            <button className="burgerMenu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </button>
        </nav>
        <nav className="menuContainer">
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
        <div className="menuBackdrop"></div>
    </>
);

export default Navbar;