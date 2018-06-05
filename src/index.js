import React from 'react';
import ReactDOM from 'react-dom';
import Chatroom from './ChatroomComponents/Chatroom.js';

<<<<<<< HEAD

function startApp(name) {
=======
function startApp() {
>>>>>>> c587c94d28b05d3ed8232ccd52f04465b9b646cc
  ReactDOM.render(
    <Chatroom name={window.sessionStorage.name}/>,
    document.getElementById('root')

  );
}


window.startApp = startApp;
