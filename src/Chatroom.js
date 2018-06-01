import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';
import { connection} from './client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  componentDidMount() {
    const socket = connection;
    socket.on('message', msg => this.setState((prevState) =>{
    console.log('STATE', this.state);
     ({ messages: prevState.messages.push(msg) })}));
  }

  render() {
    return(
      <div id="chatroom-container">
        <Header/>
        <Sidebar/>
        <Message/>
        <Footer/>
      </div>
    );
  }
}

window.sendMessage = msg => connection.emit('message',msg); 
export default Chatroom;
