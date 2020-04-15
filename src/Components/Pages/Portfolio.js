import React from 'react';
import NavTabs from "./../NavTabs.js";
import Footer from "../Layouts/Footer.js";
import Header from "../Layouts/Header.js";
import Projects from "../Projects/Trial.js";


function Portfolio() {
    return (
        <div>
            <Header />
                <NavTabs />
                    <button className="btn btn-primary">Portfolio</button><br></br>
                        <div className="col-6 col-md-3 col-lg-3">
                           <Projects  /> 
                        </div>
            <Footer />
        </div>
    )
}

    export default Portfolio;