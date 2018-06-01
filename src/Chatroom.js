import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { connection} from './client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [{author: 'North', content: 'Too many hops'}]}
  }

  componentDidMount() {
    const socket = connection;
    socket.on('message', msg => this.setState((prevState) =>{
     ({ messages: prevState.messages.push(msg) })}));
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
