import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/Calendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
});