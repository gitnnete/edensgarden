import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // Using HashRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* No need for basename here */}
      <App />
    </HashRouter>
  </React.StrictMode>,
);
