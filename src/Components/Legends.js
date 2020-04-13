import React from 'react';
import legends from '../images/lotapp.png';

function LegendsApp() {
    return (
        <div className="card2">
        <img src={legends} className="projectPhotos" alt="legendsapp" />
        <div className="card-body">
            <h4 className="card-title">Legends of Tomorrow Employee Directory</h4>
                <a className="linkText" href="https://github.com/MelanieRogoff/legendsoftomorrowapp">GitHub Repo || </a>
                <a className="linkText" href="https://lotapp.netlify.com/">Deployed Site</a>
        </div>
        </div>
        
            )
        }

    export default LegendsApp;