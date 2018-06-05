import React, { Component } from "react";

class RoomList extends Component{

  render(){
    return(
      <div className="chatroom-list">
        <ul>
    
         { this.props.roomlist.map(room => 
           <li onClick= { _ => this.props.joinRoom(room) } > {room} </li>
         )}

        </ul>
      </div>
    );
  }
}
export default RoomList;
