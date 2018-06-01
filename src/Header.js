import React, { Component } from "react";

class Header extends Component {
  render() {
    return(
      <div id="chatroom-header">
        <p className="chatroom-title"> {this.props.title} </p>
        <p className="chatroom-welcome">Welcome {this.props.name}!</p>
      </div>
    );
  }
}

export default Header;
