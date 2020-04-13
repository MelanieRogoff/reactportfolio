import React from 'react';
import burger from '../images/burgerapp.png';
import { Card, Icon, Image } from 'semantic-ui-react'


function Burger() {
    return (
        <Card>
        <Card.Header>Eat-Da-Burger</Card.Header>
        <Image className="projectPhoto" src={burger} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="#">GitHub Repo || </a>
            <a className="pinky" href="#">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>
        
            )
        }

    export default Burger;