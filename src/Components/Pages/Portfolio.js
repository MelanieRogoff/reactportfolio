import React from 'react';
import Weather from '../Projects/Weather.js'
import Burger from '../Projects/BurgerApp.js'
import CodeQuiz from '../Projects/CodeQuiz.js';
import PokeMood from '../Projects/PokeMood.js';
import LegendsApp from '../Projects/Legends.js';
import TrackThatTrack from '../Projects/TrackThatTrack.js';
import NavTabs from "./../NavTabs.js";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";

function Portfolio() {
    return (
        <div>
            <Header />
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
            <Footer />
        </div>
    )
}

    export default Portfolio;