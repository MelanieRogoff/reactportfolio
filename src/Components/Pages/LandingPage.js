import React from 'react';
import image from "../../images/headshot.jpg";
import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import './../../App.css';


function LandingPage() {
    return (
        <div className="container">   
            <Header />
                <Link to="/About">    
                    <img src={image} className="headshot" alt="myphoto" />
                        <div className="overlay">
                        <h2 className="text">Click to Enter</h2>
                        </div>
                </Link>
            <Footer />
        </div>
    )
}

export default LandingPage;