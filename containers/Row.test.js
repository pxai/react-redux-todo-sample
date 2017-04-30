import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

var index = '1';
var singleData = 'Sample data';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row key={index} cell={singleData} />, div);
});
