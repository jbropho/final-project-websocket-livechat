import React, { Component } from 'react';
import { killSocket } from './client.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.leaveRoom = this.leaveRoom.bind(this);
  }

  leaveRoom(event) {
    killSocket(this.props.name);
    if (process.env.NODE_ENV === 'production') {
      window.location.href = 'ws://finalprojectwebsocketlivechat.herokuapp.com/';
    } else {
      window.location.href = 'http://localhost:8080/';
    }
  }

  render() {
    return(
      <div id="chatroom-header">
        <p className="chatroom-title"> { this.props.title } </p>
        <p className="chatroom-welcome"> Welcome { this.props.name }! </p>
        <button type="submit"onClick={ this.leaveRoom }> leave room </button>
      </div>
    );
  }
}

export default Header;