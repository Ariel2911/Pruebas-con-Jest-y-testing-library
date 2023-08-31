import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CounterApp } from './CounterApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App title="Hola!" /> */}
    <CounterApp value={20} />
  </React.StrictMode>
);
