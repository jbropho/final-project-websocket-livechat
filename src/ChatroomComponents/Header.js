import React, { Component } from 'react';
import { killSocket } from '../client.js';
import { findWebsocketAddress } from '../helpers.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.leaveRoom = this.leaveRoom.bind(this);
  }

  leaveRoom(event) {
    killSocket(this.props.name);
    window.location.href = findWebsocketAddress();
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
