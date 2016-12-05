import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

fetch('http://localhost:8080/api/v1/messages')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
