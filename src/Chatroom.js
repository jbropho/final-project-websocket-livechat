import React, { Component } from "react";

class Chatroom extends Component {
  render() {
    return(
      <div id="chatroom-container">
        <div>Hello, {this.props.name}</div>
       </div>
    );
  }
}

export default Chatroom;
