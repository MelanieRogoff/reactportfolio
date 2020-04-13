import React from 'react';
import Weather from './Weather.js'
import Burger from './BurgerApp.js'
import CodeQuiz from './CodeQuiz.js';
import PokeMood from './PokeMood.js';
import LegendsApp from './Legends.js';
import TrackThatTrack from './TrackThatTrack.js';
import NavTabs from "./NavTabs.js";

function Portfolio() {
    return (
        <div>
            <NavTabs />
            <button className="btn btn-primary">Portfolio</button><br></br>
                <div className="col-6 col-md-3 col-lg-3">
                    <Weather />
                    <Burger />
                    <CodeQuiz />
                    <PokeMood />
                    <LegendsApp />
                    <TrackThatTrack />
                </div>
        </div>
    )
}

    export default Portfolio;