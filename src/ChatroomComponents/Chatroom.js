import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MessageBoard from './MessageBoard';
import RoomList from './RoomList';
import Favicon from 'react-favicon';
import { listenForMessages, subscribeToRoom, sendMessage } from '../client.js';


class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: { main: [] } , roomlist: ['main', 'extra-room'], activeRooms: ['main'], currentRoom: 'main' };
    this.messageAdder = this.messageAdder.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  componentDidMount() {
    subscribeToRoom('main', this.props.name);
    listenForMessages('main', this.messageAdder);
  }

  isInRoom(room) {
    return this.state.activeRooms.includes(room);
  }

  joinRoom(room) {
    if (!this.isInRoom(room)) {
      this.state.activeRooms.push(room);
      subscribeToRoom(room, this.props.name);
      listenForMessages(room, this.messageAdder);
      this.state.messages[room] = [];
    }
    this.setState({currentRoom : room});
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
        <Favicon url="https://i.imgur.com/zCkTxuA.png"/>
        <Header name={ this.props.name } />
        <Sidebar />
        <RoomList roomlist={ this.state.roomlist } joinRoom={ this.joinRoom } currentRoom={this.state.currentRoom}/>
        <MessageBoard messageList={ this.state.messages[this.state.currentRoom]}/>
        <Footer name={ this.props.name } roomName={ this.state.currentRoom }  />
      </div>
    );
  }
}

export default Chatroom;
