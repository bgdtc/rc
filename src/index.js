// ROOT APPLICATION

// IMPORT MODULES
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store'
import reportWebVitals from './tests/reportWebVitals';

// RENDER APPLICATION
const root = ReactDOM.createRoot(document.getElementById('root'));
reportWebVitals(console.log);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

