import React from "react";
import NavTabs from "./NavTabs.js";
import resume from "../images/resume.png";

function Resume() {
    return (
    <div>
       <NavTabs />
            <button className="btn btn-primary">Resume</button>
                <p>Click below for the full PDF version.</p>
        
                <a href="https://docs.google.com/document/d/1rXPAHR2Twoo5q50ES292JGfl1nkFlRbX-kWkVCSo0B8/export?format=pdf">      
                    <img src={resume} className="resumePic" alt="resume" />
                </a>
    </div>
    )
}

export default Resume;