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

        <Weather />
        <Burger />
        <CodeQuiz />
        <PokeMood />
        <LegendsApp />
        <TrackThatTrack />
        </div>
    )
}

    export default Portfolio;