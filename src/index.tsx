import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SocketProvider from "./context/socket"
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-empty-function
console.log = () => {
  return;
}

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <App />
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
