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
      <div className="chatroom-list not-hidden-left" id="left-bar" onClick= { this.slideLeft } >
        {this.props.roomlist.map(room => <li>{room}</li>)}
        <SlideButton/>
      </div>
    );
  }

}

export default RoomList;
