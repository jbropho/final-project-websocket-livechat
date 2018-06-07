import React, { Component } from "react";

class SlideButton extends Component{

  constructor(props) {
   super(props);
   this.slideLeft = this.slideLeft.bind(this);
  }

  slideLeft() {
    document.getElementById("left-bar").classList.toggle("hidden-left");
    document.getElementById("left-bar").classList.toggle("not-hidden-left");
  }

  render(){
    return(
      <div onClick={ this.slideLeft } className="btn" id="slide-btn"> &#x3008; </div>
    );
  }

}

class RoomList extends Component{

  render(){

    return(
      <div className="chatroom-list">
        <ul>

         { this.props.roomlist.map(room =>{console.log(this.props.currentRoom)
           return <li className={room === this.props.currentRoom ? room : null} onClick= { _ => this.props.joinRoom(room) } > {room} </li>}
         )}

        </ul>
      </div>
    );
  }

}

export default RoomList;
