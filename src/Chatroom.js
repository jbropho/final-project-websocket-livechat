import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';

class Chatroom extends Component {
  render() {
    return(
      <div id="chatroom-container">
        <Header/>
        <Message/>
        <Footer/>
      </div>

    );
  }

}

export default Chatroom;
