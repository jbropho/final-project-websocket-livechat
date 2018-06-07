import React, { Component } from "react";

class RoomList extends Component{

  render(){
    return(
      <div className="chatroom-list">
        <ul>

          { this.props.roomlist.map(room =>
            <li className={room === this.props.currentRoom ? 'active-room' : null} onClick= { _ => this.props.joinRoom(room) } > {room} </li>
          )}

        </ul>
      </div>
    );
  }
}

export default RoomList;
