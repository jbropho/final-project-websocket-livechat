import React, { Component } from "react";
import Header from './Header';
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
        <Header name={ this.props.name } />
        <Sidebar />
        { this.state.messages.map(msg => <Message { ...msg } />) }
        <Footer name={ this.props.name } />
      </div>
    );
  }
}

export default Chatroom;
