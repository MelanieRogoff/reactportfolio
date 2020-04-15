import React from 'react';
import Project from "./Project.js";

const projectApps = [
    {
        name: "Eat-Da-Burger!",
        src: "../../images/burgerapp.png",
        github: "https://github.com/MelanieRogoff/burger",
        deployed: "https://floating-gorge-77305.herokuapp.com/"
    },
    {
        name: "Legends of Tomorrow Employee Directory",
        src: "../../images/lotapp.png",
        github: "https://github.com/MelanieRogoff/legendsoftomorrowapp",
        deployed: "https://lotapp.netlify.com/"
    },
    {
        name: "Weather Dashboard",
        src: '../../images/weatherapp.png',
        github: "https://github.com/MelanieRogoff/Unit6HW",
        deployed: "https://melanierogoff.github.io/Unit6HW/"
    },
    {
        name: "Track That Track",
        src: '../../images/trackthattrack.png',
        github: "https://github.com/Bearpaw11/TrackThatTrack",
        deployed: "https://bearpaw11.github.io/TrackThatTrack/"
    },
    {
        name: "Code Quiz",
        src: '../../images/quiz.png',
        github: "https://github.com/MelanieRogoff/Unit4HW",
        deployed: "https://melanierogoff.github.io/Unit4HW/"
    },
    {
        name: "PokeMood",
        src: '../../images/pokemood.png',
        github: "https://github.com/MelanieRogoff/PokeMood",
        deployed: "https://murmuring-mountain-45065.herokuapp.com/"
    },
]

function Projects() {
    return (
        projectApps.map(elem => { //need the array of objects above to access each project
            return <Project src={elem.src} //and then map through them
                            name={elem.name} //and return it to the Portfolio.js file
                            github={elem.github}
                            deployed={elem.deployed}
                            />
        }) 
    )
}

    export default Projects;