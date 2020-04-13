import React from 'react';

import weather from '../images/weatherapp.png';


function Weather() {
    return (

        <div className="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <img src={weather} className="card-img-top" alt="WeatherApplication" />
                
                    <div class="card-body">
                        <h5 class="card-title text-center">Weather Dashboard</h5>
                        <p class="text-center">
                            <a class="pinky" href="https://github.com/MelanieRogoff/Unit6HW">GitHub
                                Repo || </a>
                            <a class="pinky" href="https://melanierogoff.github.io/Unit6HW/">Deployed
                            Site</a></p>
                    </div>
                </div>
                </div>
                </div>
    )
}

    export default Weather;