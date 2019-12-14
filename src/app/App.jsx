import React from 'react';
import './App.scss';

import image from '../assets/test.jpg';

const App = () => (
  <div className="app">
    <span>React Boilerplate</span>
    <h2>Test</h2>
    <img src={image} alt="Test" />
  </div>
);

export default App;
