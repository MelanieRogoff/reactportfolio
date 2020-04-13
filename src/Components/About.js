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

                        <p className="card-text">My name is Melanie Rogoff, and I am a Full-Stack Developer. I am passionate about building user-friendly, aesthetically pleasing projects.</p>
                        <p className="card-text">I have a Bachelor's of Science in Business Management from Arizona State University (4.0 GPA) and will be graduating from the University of Arizona Full-Stack Coding Bootcamp in May 2020.</p>
                        <p className="card-text">Current Languages Include:</p>
               
                            <i className="iconSizing devicon-bootstrap-plain"></i>
                            <i className="iconSizing devicon-css3-plain"></i>
                            <i className="iconSizing devicon-express-original"></i>
                            <i className="iconSizing devicon-heroku-plain"></i>
                            <i className="iconSizing devicon-html5-plain"></i>
                            <i className="iconSizing devicon-javascript-plain"></i>
                            <i className="iconSizing devicon-jquery-plain"></i>
                            <i className="iconSizing devicon-mongodb-plain"></i>
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