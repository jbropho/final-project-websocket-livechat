import React, { Component } from "react";
import { handlePostClick } from '../helpers.js';
import { enterClick, messageReader, clearMesssageField } from '../helpers.js';
import { sendMessage } from '../client.js';





class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="input">
          <input autoFocus="true" id="text-field" maxLength="142" placeholder="Enter message here...">
          </input>
          <button className="btn" id="send-msg" onClick={ _ => handlePostClick(this.props.name) }> &#x21e8; </button>
        </div>
      </div>
    );
  }
}


export default Footer;
