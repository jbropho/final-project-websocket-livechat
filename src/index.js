import React from 'react';
import ReactDOM from 'react-dom';
import Chatroom from './Chatroom.js';

function startApp(name) {
  ReactDOM.render(
    <Chatroom name={window.sessionStorage.name}/>,
    document.getElementById('root')
  );
}

window.startApp = startApp;
