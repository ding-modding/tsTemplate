import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
import './ui/index';
>>>>>>> d9b7d98a6d0936839e31315c118e586f9a5ba559
import { App } from './router';
import { reportWebVitals } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
