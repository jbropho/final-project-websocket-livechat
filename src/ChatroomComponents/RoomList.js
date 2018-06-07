import React, { Component } from 'react';

class RoomList extends Component{


  render(){ 
    return(
      <div className="chatroom-list">
        <ul> d
          { this.props.roomlist.map(room =>{
            return <li className={room === this.props.currentRoom ? room : null} onClick= { _ => this.props.joinRoom(room) } > {room} </li>}


         )}

        </ul>
      </div>
    );
  }
}

export default RoomList;
