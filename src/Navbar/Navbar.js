import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul className="Navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/resume">Resume</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
    )
}

export default Navbar;
