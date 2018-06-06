import React, { Component } from "react";
import { handlePostClick, enterClick, messageReader, clearMesssageField } from '../helpers.js';
import { sendMessage } from '../client.js';

class Footer extends Component{

  render(){
    return(
      <div className="footer">
        <div className="input">
          <input autoFocus="true" id="text-field" maxLength="142" placeholder="Enter message here..." onKeyPress={enterClick(this.props.name)}>
          </input>
          <button className="btn" id="send-msg"
              onClick={ _ => handlePostClick(this.props.name, this.props.roomName) }> &#x21e8; </button>
        </div>
      </div>
    );
  }
}


export default Footer;
