import React from 'react';
import poke from '../images/pokemood.png';
import { Card, Icon, Image } from 'semantic-ui-react'

function PokeMood() {
    return (
        <Card>
         <Card.Header>PokeMood</Card.Header>
        <Image className="projectPhoto" src={poke} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="#">GitHub Repo || </a>
            <a className="pinky" href="#">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>
        
            )
        }

    export default PokeMood;