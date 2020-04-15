import React from 'react';

function Links(props) {
    return (
        <a className="linkText" href={props.href}>{props.title}</a>
    )
}

    export default Links;