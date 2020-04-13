import React from 'react';
import poke from '../images/pokemood.png';

function PokeMood() {
        return (
            <div className="card2">
                <img src={poke} className="projectPhotos" alt="pokemood" />
                    <div className="card-body">
                        <h4 class="card-title">PokeMood</h4>
                            <a class="linkText" href="https://github.com/MelanieRogoff/PokeMood">GitHub Repo || </a>
                            <a class="linkText" href="https://murmuring-mountain-45065.herokuapp.com/">Deployed Site</a>
                    </div>
            </div>
        )
}
    export default PokeMood;