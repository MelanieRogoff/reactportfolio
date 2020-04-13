import React from 'react';
import './App.css';
import About from './Components/About.js';
import LandingPage from './Components/LandingPage.js';
import NavTabs from "./Components/NavTabs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Components/Contact.js";
// import Portfolio from "./Components/Portfolio.js";
//import Resume from "./Components/Resume.js";



export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //figure this out
        }
    }

    render() {
      return (
          <Router>
            <div className="App">
            <header className="App-header">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                {/* <Route exact path="/Portfolio" component={Portfolio} /> */}
                {/* <Route exact path="/Resume" component={Resume} /> */}
            </header>
        </div>
        </Router>
        );
    }
}



export default App;
