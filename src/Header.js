import React, { Component } from 'react';
import { killSocket } from './client.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.leaveRoom = this.leaveRoom.bind(this);
  }

  leaveRoom(event) {
    killSocket(this.props.name);
    window.location.href = 'http://localhost:8080/';
  }

  render() {
    return(
      <div id="chatroom-header">
        <p className="chatroom-title"> { this.props.title } </p>
        <p className="chatroom-welcome">Welcome { this.props.name }!</p>
        <input type="submit" value="leave room"
        onClick={ this.leaveRoom }></input>
      </div>
    );
  }
}

export default Header;
