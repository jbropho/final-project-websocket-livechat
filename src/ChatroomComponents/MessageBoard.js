import React, { Component } from "react";
import Message from './Message';
import { updateScroll } from '../helpers';

class MessageBoard extends Component{

  componentDidUpdate() {
    updateScroll();
  }

  render(){
    return(
      <div id="message-board">
         {this.props.messageList.map(msg => <Message { ...msg } />) }
      </div>
    );
  }
}
export default MessageBoard;
