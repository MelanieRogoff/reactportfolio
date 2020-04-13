import React from 'react';
import burger from '../images/burgerapp.png';

function Burger() {
    return (
        <div className="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <img src={burger} className="card-img-top" alt="Burger App" />
                
                    <div class="card-body">
                        <h5 class="card-title text-center">Eat-Da-Burger</h5>
                        <p class="text-center">
                            <a class="pinky" href="#">GitHub
                                Repo || </a>
                            <a class="pinky" href="#">Deployed
                            Site</a></p>
                    </div>
                </div>
                </div>
                </div>
    )
}

    export default Burger;