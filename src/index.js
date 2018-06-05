import React from 'react';
import ReactDOM from 'react-dom';
import Chatroom from './ChatroomComponents/Chatroom.js';


function startApp() {
  ReactDOM.render(
    <Chatroom name={window.sessionStorage.name}/>,
    document.getElementById('root')

  );
}


window.startApp = startApp;
