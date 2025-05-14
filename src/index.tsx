import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/globals.scss";
// import './index.css';
import App from './App';
import MainPage from './main-page/main-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);