import React from 'react';
import burger from '../images/burgerapp.png';

function Burger() {
    return (
        <div className="card2">
            <img src={burger} className="projectPhotos" alt="burgerApp" />
        
                <div className="card-body">
                    <h4 className="card-title">Eat-Da-Burger</h4>
                        <a className="linkText" href="https://github.com/MelanieRogoff/burger">GitHub Repo || </a>
                        <a className="linkText" href="https://floating-gorge-77305.herokuapp.com/">Deployed Site</a>
                </div>
        </div>
    )
}

    export default Burger;