import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Chatroom from './Chatroom.js';

function startApp(name) {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

window.startApp = startApp;