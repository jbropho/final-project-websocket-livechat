import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MessageBoard from './MessageBoard';
import RoomList from './RoomList';
import { listenForMessages } from '../client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD:src/ChatroomComponents/Chatroom.js
    this.state = { messages: [], roomlist: [] }
=======
    this.state = { messages: [] };
>>>>>>> styling-n:src/Chatroom.js
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
        <RoomList roomlist={ this.state.roomlist }/>
        <MessageBoard messageList={ this.state.messages }/>
        <Footer name={ this.props.name } />
      </div>
    );
  }
}


export default Chatroom;
