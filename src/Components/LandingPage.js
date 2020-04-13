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
            <div className="content">Click to Enter</div>
            </Link>
        </div>
        </div>
    )
}

export default LandingPage;