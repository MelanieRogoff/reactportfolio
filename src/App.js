import React from 'react';
import './App.css';
import image from "./images/headshot.jpg";
import Buttons from "./Components/Buttons.js";
import About from './Components/About.js';

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
      <header className="App-header">
        <p className="Title">Melanie Rogoff</p>
        <img src={image} className="headshot" alt="myphoto" />
        <About />
            <Buttons onClick={this.setRedirect}>Redirect</Buttons>
      </header>
    </div>

  );
}
}



export default App;
