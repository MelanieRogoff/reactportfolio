import React from 'react';
import weather from '../images/weatherapp.png';
import { Card, Icon, Image } from 'semantic-ui-react'


function Weather() {
    return (
        <Card>
        <Card.Header>Weather Dashboard</Card.Header>
        <Image className="projectPhoto" src={weather} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="https://github.com/MelanieRogoff/Unit6HW">GitHub Repo || </a>
            <a className="pinky" href="https://melanierogoff.github.io/Unit6HW/">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>

    )
}

    export default Weather;