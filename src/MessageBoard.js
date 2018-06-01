import React, { Component } from "react";
import Message from './Message'

class MessageBoard extends Component{
  render(){
    console.log('im in the message board');
    return( 
      <div className="message-board">
         {this.props.messageList.map(msg => <Message { ...msg } />) } 
      </div>
    );
  }
}
export default MessageBoard;
