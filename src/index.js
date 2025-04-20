import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';    // подключаем глобальные стили
import App from './App';  // основной компонент

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
