import React from 'react';
import code from '../../images/quiz.png';

function CodeQuiz() {
    return (
        <div className="card2">
            <img src={code} className="projectPhotos" alt="codequiz" />
        
                <div className="card-body">
                    <h4 className="card-title">Code Quiz</h4>
                        <a className="linkText" href="https://github.com/MelanieRogoff/Unit4HW">GitHub Repo || </a>
                        <a className="linkText" href="https://melanierogoff.github.io/Unit4HW/">Deployed Site</a>
                </div>
        </div>
    )
}

    export default CodeQuiz;