import React from "react";

import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const location = useLocation();
    //using code from react-router docs to check the route anytime the user uses a link to navigate

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
            <Link to="/About" className={location.pathname === "About" ? "nav-link active" : "nav-link"}>
                About
            </Link>
            <Link to="/Resume" className={location.pathname === "Resume" ? "nav-link active" : "nav-link"}>
                Resume
            </Link>
            <Link to="/Portfolio" className={location.pathname === "Portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
            </Link>
            <Link to="/Contact" className={location.pathname === "Contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
        </nav>
    );
}

export default NavTabs;