import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { SERVER_URL } from './config';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

fetch(`${SERVER_URL}/api/v1/messages`)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
