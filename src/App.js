import React from 'react';
import './App.css';
import './Sizing.css';
import About from './Components/Pages/About.js';
import LandingPage from './Components/Pages/LandingPage.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Pages/Contact.js";
import Portfolio from "./Components/Pages/Portfolio.js";
import Resume from "./Components/Pages/Resume.js";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //figure this out
        }
    }

    render() {
      return (
          <div className="App">
          <Router>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Portfolio" component={Portfolio} />
                <Route exact path="/Resume" component={Resume} />
        </Router>

        </div>
        );
    }
}



export default App;
