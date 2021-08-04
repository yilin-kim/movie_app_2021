import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App/ >은 HTML이 아닌 component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

