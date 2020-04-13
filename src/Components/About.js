import React from 'react';
import '../App.js';
import image from "../images/headshot.jpg";

function About() {
        return(
            <div className="card">

            <div className="card-body">

                <h3>About</h3>

                <img src={image} className="headshot" alt="myphoto" />

                <p className="card-text">Melanie Rogoff is a talented Full-Stack Developer. Skills include JavaScript, MySQL, React, Node, Express, and Responsive Web/App Design.</p>

                <p className="card-text">Ms. Rogoff will be receiving a certificate in Full-Stack Web Development from the University of Arizona in May 2020.</p>

                <p className="card-text">Ms. Rogoff currently holds a Bachelor's of Science in Business Management from Arizona State University (4.0 GPA).</p>
            </div>
            </div>
        )
}
export default About;