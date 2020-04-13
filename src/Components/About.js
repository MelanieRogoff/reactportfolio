import React from 'react';
import '../App.js';
import image from "../images/headshot.jpg";
import NavTabs from "./NavTabs.js";

function About() {
    return(
        <div>
            <NavTabs />
                <button className="btn btn-primary">About</button><br></br>
                <img src={image} className="headshot" alt="myphoto" />
                    
                    <div className="card">

                        <p className="card-text">Bonjour! ¡Hola! Shalom! Hello!</p>
                        <p className="card-text">My name is Melanie Rogoff, and I am a Full-Stack Developer. I am passionate about helping others, specifically by building user-friendly and aesthetically pleasing projects.</p>
                        <p className="card-text">I have a Bachelor's of Science in Business Management from Arizona State University (4.0 GPA) and will be graduating from the University of Arizona Full-Stack Coding Bootcamp in May 2020.</p>
                        <p className="card-text">I am always learning new languages -- here are the ones I currently use:</p>
               
                            <i class="iconSizing devicon-bootstrap-plain"></i>
                            <i class="iconSizing devicon-css3-plain"></i>
                            <i class="iconSizing devicon-express-original"></i>
                            <i class="iconSizing devicon-heroku-plain"></i>
                            <i class="iconSizing devicon-html5-plain"></i>
                            <i class="iconSizing devicon-javascript-plain"></i>
                            <i class="iconSizing devicon-jquery-plain"></i>
                            <i class="iconSizing devicon-mongodb-plain"></i>
                            <i className="iconSizing devicon-mysql-plain"></i>
                            <i className="iconSizing devicon-nodejs-plain"></i>
                            <i className="iconSizing devicon-react-original"></i>
                            <i className="iconSizing devicon-sequelize-plain"></i>
                            <i className="iconSizing devicon-visualstudio-plain"></i>
                            <i className="iconSizing devicon-webpack-plain"></i>
                            <i className="iconSizing devicon-wordpress-plain"></i>
                    </div>
            </div>
    )
}
export default About;