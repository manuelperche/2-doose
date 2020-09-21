import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootswatch/dist/darkly/bootstrap.min.css'
import App from './components/app/App';

import './utils/firebase'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
