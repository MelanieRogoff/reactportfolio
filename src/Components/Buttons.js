import React from 'react';
import '../App.js';

function Buttons(props) { 
    return ( 
        <div>
            <button type="button" onClick={props.functionOne} className="btn btn-warning"></button>
        </div>
    )}

    export default Buttons;