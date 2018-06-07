import React, { Component } from "react";
import Message from './Message';
import { updateScroll } from '../helpers';

class MessageBoard extends Component{

  componentDidUpdate() {
    updateScroll('message-board');
  }

  render(){
    return(
      <div id="message-board" className={this.props.currentRoom}>
        {this.props.messageList.map(msg => <Message { ...msg } />).reverse() }
      </div>
    );
  }

}

export default MessageBoard;
