import React from 'react';
import image from "../images/headshot.jpg";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1 className="card-title">Melanie Rogoff</h1>
        
            <div className="example">
                <Link to="/About">    
                    <img src={image} className="headshot" alt="myphoto" />
                    <h3 className="content">Click to Enter</h3>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;