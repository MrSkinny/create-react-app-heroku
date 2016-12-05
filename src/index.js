import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const HOSTNAME = process.env.NODE_ENV === 'production' ?
  '' :
  'http://localhost:8080';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

fetch(`${HOSTNAME}/api/v1/messages`)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
