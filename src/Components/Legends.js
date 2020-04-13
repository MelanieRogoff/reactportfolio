import React from 'react';
import legends from '../images/lotapp.png';
import { Card, Icon, Image } from 'semantic-ui-react'


function LegendsApp() {
    return (
        <Card>
        <Card.Header>Legends of Tomorrow Employee Directory</Card.Header>
        <Image className="projectPhoto" src={legends} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="#">GitHub Repo || </a>
            <a className="pinky" href="#">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>
        
            )
        }

    export default LegendsApp;