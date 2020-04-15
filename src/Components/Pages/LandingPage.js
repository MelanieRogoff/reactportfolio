import React from 'react';
import image from "../../images/headshot.jpg";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";

function LandingPage() {
    return (
        <div>   
            <Header />
                <Link to="/About">    
                    <img src={image} className="headshot" alt="myphoto" />
                        <h3 className="content">Click to Enter</h3>
                </Link>
            <Footer />
        </div>
    )
}

export default LandingPage;