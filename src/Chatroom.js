import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { listenForMessages } from './client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }
    this.messageAdder = this.messageAdder.bind(this);   
  }

  componentDidMount() {
    listenForMessages(this.messageAdder);
  }

  messageAdder(msg){
    this.setState(prevState =>(
    { messages: prevState.messages.concat(msg) }) );
  }

  render() {
    return(
      <div id="chatroom-container">
        <Header { this.props.name } />
        <Sidebar />
        { this.state.messages.map(msg => <Message { ...msg } />) }
        <Footer { this.props.name } />
      </div>
    );
  }
}

export default Chatroom;
