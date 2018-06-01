import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { socket} from './client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: [{}]}
  }

  componentDidMount() {
    socket.on('message', msg => this.setState((prevState) =>{
     return ({ messages: prevState.messages.concat(msg)})}));
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
        {this.state.messages.map(msg => <Message {...msg} />)}
        <Footer name={this.props.name} />
      </div>
    );
  }
}

window.sendMessage = msg => socket.emit('message', msg);
export default Chatroom;
