import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MessageBoard from './MessageBoard';
import RoomList from './RoomList';
import { listenForMessages, subscribeToRoom } from '../client.js';


class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: { main: [] } , roomlist: ['main'], activeRooms: ['main'], currentRoom: 'main' };
    this.messageAdder = this.messageAdder.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  componentDidMount() {
    listenForMessages('main', this.messageAdder);
  }

  isInRoom(room) {
    return this.state.activeRooms.includes(room);
  }

  joinRoom(room) {
    if (!this.isInRoom(room)) {
      this.state.activeRooms.push(room);
      subscribeToRoom(room, this.props.name);
      this.state.messages[room] = [];
    }
  }

  messageAdder(msg, room = 'main'){
    this.setState(prevState => {
     prevState.messages[room] = prevState.messages[room].concat(msg);
     return prevState;
    })
  }

  render() {
    return(
      <div id="chatroom-container">
        <Header name={ this.props.name } />
        <Sidebar />
        <RoomList roomlist={ this.state.roomlist }/>
        <MessageBoard messageList={ this.state.messages[this.state.currentRoom] }/>
        <Footer name={ this.props.name } />
      </div>
    );
  }
}

export default Chatroom;
