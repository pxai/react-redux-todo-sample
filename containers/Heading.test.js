import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';

var index = '1';
var name = 'Sample data';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Heading key={index} heading={name} />, div);
});
