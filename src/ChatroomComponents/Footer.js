import React, { Component } from "react";
import { handlePostClick, enterClick, messageReader, clearMesssageField } from '../helpers.js';


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
