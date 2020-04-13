import React from 'react';
import track from '../images/trackthattrack.png';

function TrackThatTrack() {
    return (
        <div className="card2">
                <img src={track} className="projectPhotos" alt="myphoto" />
                <div className="card-body">
                    <h4 class="card-title">Track That Track</h4>
                        <a class="linkText" href="https://github.com/Bearpaw11/TrackThatTrack">GitHub Repo || </a>
                        <a class="linkText" href="https://bearpaw11.github.io/TrackThatTrack/">Deployed Site</a>
                </div>
                </div>
            )
        }
        

    export default TrackThatTrack;