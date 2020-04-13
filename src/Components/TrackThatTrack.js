import React from 'react';
import track from '../images/trackthattrack.png';
import { Card, Icon, Image } from 'semantic-ui-react'


function TrackThatTrack() {
    return (
        <Card>
        <Card.Header>Track That Track</Card.Header>
        <Image className="projectPhoto" src={track} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="#">GitHub Repo || </a>
            <a className="pinky" href="#">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>
        
            )
        }

    export default TrackThatTrack;