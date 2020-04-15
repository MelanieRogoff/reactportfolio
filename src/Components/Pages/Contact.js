import React from "react";
import linkedIn from "../../images/linkedin.png"
import gitpink from "../../images/gitpink.png"
import phone from "../../images/phone.jpeg";
import email from "../../images/email.png";
import NavTabs from "./../NavTabs.js";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";


function Contact() {
    return (
        <div>
            <Header />
                <NavTabs />
                    <button className="btn btn-primary">Contact</button>
                        <p>Let's get in touch!</p>
        
                        <div className="card2 col-2 col-md-2 col-lg-2">
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
            <Footer />
        </div>
    )
}

export default Contact;