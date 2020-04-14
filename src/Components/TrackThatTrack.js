import React from 'react';
import track from '../images/trackthattrack.png';

function TrackThatTrack() {
    return (
        <div className="card2">
            <img src={track} className="projectPhoto" alt="myphoto" />
                <div className="card-body">
                    <h4 className="card-title">Track That Track</h4>
                        <a className="linkText" href="https://github.com/Bearpaw11/TrackThatTrack">GitHub Repo || </a>
                        <a className="linkText" href="https://bearpaw11.github.io/TrackThatTrack/">Deployed Site</a>
                </div>
        </div>
    )
}
        

    export default TrackThatTrack;