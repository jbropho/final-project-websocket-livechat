import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';

class Chatroom extends Component {
  render() {
    return(
      <div id="chatroom-container">
        <Header/>
        <Message/>
      </div>

    );
  }

}

export default Chatroom;
