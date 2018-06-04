import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MessageBoard from './MessageBoard';
import RoomList from './RoomList';
import { listenForMessages } from '../client.js';
import { subscibeToRoom } from '../client.js';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], roomlist: [], activeRooms: [] };
    this.messageAdder = this.messageAdder.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  componentDidMount() {
    listenForMessages(this.messageAdder);
  }

  isInRoom(room) {
    return this.state.activeRooms.includes(room);
  }

  joinRoom(room) {
    if (!this.isInRoom(room)) this.state.activeRooms.push(room);
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
