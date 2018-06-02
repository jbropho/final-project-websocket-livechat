import React, { Component } from "react";
import { sendMessage } from '../client.js';

const messageReader = _ => document.getElementById('text-field').value;

const clearMessageField = _ => document.getElementById('text-field').value = '';

const handlePostClick = name => {
  sendMessage({ author: name, content: messageReader() });
  clearMessageField();
}

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="input">
          <input type="text" id="text-field" maxLength="142" size="142" placeholder="Enter message here..."></input>
        </div>
        <div>
          <button onClick={ _ => handlePostClick(this.props.name) }> post </button>
        </div>
      </div>
    );
  }
}

export default Footer;
