import React from 'react';
import weather from '../images/weatherapp.png';

function Weather() {
    return (
        <div className="card2">
            <img src={weather} className="projectPhotos" alt="weatherapp" />
                
                <div className="card-body">
                    <h4 className="card-title">Weather Dashboard</h4>
                        <a className="linkText" href="https://github.com/MelanieRogoff/Unit6HW">GitHub Repo || </a>
                        <a className="linkText" href="https://melanierogoff.github.io/Unit6HW/">Deployed Site</a>
                </div>
        </div>

    )
}

    export default Weather;