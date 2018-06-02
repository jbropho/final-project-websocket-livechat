import React, { Component} from "react";
class Message extends Component{
  render(){
    return(
      <div className="message">
        <p className="author">{this.props.author}</p>
        <p className="content">{this.props.content}</p>
      </div>
    );
  }
}

export default Message;
