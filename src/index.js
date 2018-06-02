import React from 'react';
import ReactDOM from 'react-dom';
import Chatroom from './ChatroomComponents/Chatroom.js';

function startApp(name) {
  ReactDOM.render(
    <Chatroom name={name}/>,
    document.getElementById('root')
  );
}

window.startApp = startApp;
