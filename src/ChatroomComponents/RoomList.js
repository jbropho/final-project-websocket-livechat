import React, { Component } from "react";

class RoomList extends Component{

  render(){
    return(
      <div className="chatroom-list">
        {this.props.roomlist.map(room => <li>{room}</li>)}
      </div>
    );
  }
}
export default RoomList;
