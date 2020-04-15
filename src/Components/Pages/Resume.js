import React from "react";
import NavTabs from "./../NavTabs.js";
import resume from "../../images/res.jpg";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";

function Resume() {
    return (
        <div>
            <Header/>
                <NavTabs />
                    <button className="btn btn-primary">Resume</button>
                        <p>Click below for the full PDF version.</p>
        
                        <a href="https://docs.google.com/document/d/1rXPAHR2Twoo5q50ES292JGfl1nkFlRbX-kWkVCSo0B8/export?format=pdf">      
                            <img src={resume} className="resumePic" alt="resume" />
                        </a>
            <Footer />
        </div>
    )
}

export default Resume;