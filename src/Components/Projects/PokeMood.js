import React from 'react';
import poke from '../../images/pokemood.png';

function PokeMood() {
    return (
        <div className="card2">
            <img src={poke} className="projectPhotos" alt="pokemood" />
                <div className="card-body">
                    <h4 className="card-title">PokeMood</h4>
                        <a className="linkText" href="https://github.com/MelanieRogoff/PokeMood">GitHub Repo || </a>
                        <a className="linkText" href="https://murmuring-mountain-45065.herokuapp.com/">Deployed Site</a>
                </div>
        </div>
    )
}
    export default PokeMood;