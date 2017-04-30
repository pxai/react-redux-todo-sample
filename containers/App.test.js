import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var author = 'Pello Altadill';
var headings = ['Id','Who','When','Description'];
var data = [{
    "id" : "1",
    "who": "2",
    "when": "2017-04-10",
    "description": "Installed React"
}];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App author={author} headings={headings} data={data} />, div);
});
