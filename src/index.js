import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Apology from './components/Apology';
import Beg from './components/Beg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Timeline />
    <Apology />
    <Beg />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

