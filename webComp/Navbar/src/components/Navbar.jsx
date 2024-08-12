import React from "react";
import './Navbar.css'

const  Navbar = ( ) => {
    return (
        <header className="header">
            <a href="/" className="logo">logo</a>
            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">Projects</a>
                <a href="/">AboutME</a>
                <a href="/">Links</a>

            </nav>
        </header>
    )
}

export default Navbar