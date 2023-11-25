// ------------------------------main----------------------------------//


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import mixpanel from 'mixpanel-browser';
 
mixpanel.init('b2ff7ac9e3348a34108ce514efef85ce', {debug: true, track_pageview: true, persistence: 'localStorage'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);