import React from "react";
import Links from "../Layouts/Links.js";

function Project(props) {

    return (
        <div className="card2">
            <img src={props.src} className="projectPhotos" alt="apps" />
        
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                        <Links href={props.github} title="GitHub Link || "></Links>
                        <Links href={props.deployed} title="Deployed Link"></Links>
                </div>
        </div>
    )
}

    export default Project;