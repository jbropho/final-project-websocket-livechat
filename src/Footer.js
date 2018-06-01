import React, { Component } from "react";
import { sendMessage } from './client.js';

const messageReader = _ => document.getElementById('text-field').value;

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="input">
          <input type="text" id="text-field" maxLength="142" size="142" placeholder="Enter message here..."></input>
        </div>
        <div>
          <input onClick={ _ => sendMessage({author:this.props.name, content: messageReader() })} id="post-message"></input>
        </div>
      </div>
    );
  }
}

export default Footer;
