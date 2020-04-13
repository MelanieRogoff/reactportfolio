import React from "react";
import linkedIn from "../images/linkedin.png"
import gitpink from "../images/gitpink.png"
import phone from "../images/phone.jpeg";
import email from "../images/email.png";
import { Link } from "react-router-dom";
import NavTabs from "./NavTabs.js";

function Contact() {
    return (
    <div>
       <NavTabs />
            <button className="btn btn-primary">Contact</button>
                <p>Let's get in touch!</p>
        
                <a href="https://www.linkedin.com/in/MelanieRogoff">        
                    <img src={linkedIn} className="icons" alt="linkedin" />
                    </a>

                <a href="https://github.com/MelanieRogoff">        
                    <img src={gitpink} className="icons" alt="github" />
                </a>

                <a href="tel:1-480-720-7836">        
                    <img src={phone} className="icons" alt="phone" />
                </a>

                <a href="mailto: mgrogoff@gmail.com">        
                    <img src={email} className="icons" alt="email" />
                </a>
    </div>
    )
}

export default Contact;