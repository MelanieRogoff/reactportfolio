import React from 'react';
import code from '../images/quiz.png';
import { Card, Icon, Image } from 'semantic-ui-react'

function CodeQuiz() {
    return (
        <Card>
        <Card.Header>Code Quiz</Card.Header>
        <Image className="projectPhoto" src={code} wrapped ui={false} />
        <Card.Content>
        <Card.Description>
            <a className="pinky" href="#">GitHub Repo || </a>
            <a className="pinky" href="#">Deployed Site</a>
        </Card.Description>
        </Card.Content>
        </Card>
        
            )
        }

    export default CodeQuiz;