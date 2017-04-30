import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var author = 'Pello Altadill';
var appTitle ='Workorder App';

var data = [{
    "id" : "1",
    "who": "2",
    "when": "2017-04-10",
    "description": "Installed React"
},
    {
        "id" : "2",
        "who": "2",
        "when": "2017-04-11",
        "description": "Installed Everything required."
    },
    {
        "id" : "3",
        "who": "2",
        "when": "2017-04-12",
        "description": "Trying all elements"
    }];

var headings = ['Id','Who','When','Description'];
// Propierties spread, ES6 feature.
// Title is set by default props in App Component
var properties = { title: appTitle, headings: headings , data: data, author: author };

ReactDOM.render(
    <App
        /*
            This is
            the main component
        */
        {...properties}
         />,
    document.getElementById('root')
);
