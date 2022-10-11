import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CMSContextProvider from './CMSContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <CMSContextProvider>
    <App />
  </CMSContextProvider>
)
