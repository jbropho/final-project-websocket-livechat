import React, { Component } from "react";

class Header extends Component {
  render() {
    return(
      <div id="chatroom-header">
        <p className="chatroom-title"> {this.props.title} </p>
      </div>
    );
  }
}

export default Header;