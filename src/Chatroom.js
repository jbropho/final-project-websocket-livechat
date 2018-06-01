import React, { Component } from "react";
import Header from './Header';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [{}]}
  }

  render() {
    const messages = this.state.messages.map((message) => {
      return (
        <Message author={message.author} content={message.content} />
      );
    });
    return(
      <div id="chatroom-container">
        <Header/>
        <Sidebar/>
        {messages}
        <Footer/>
      </div>
    );
  }
}
export default Chatroom;
