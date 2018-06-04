import React, { Component } from "react";
import { sendMessage } from '../client.js';

const messageReader = _ => document.getElementById('text-field').value;
const clearMessageField = _ => document.getElementById('text-field').value = '';

const enterClick = document.addEventListener("keyup", function(event){
  var userText = document.getElementById("text-field");
  if (userText.value && event.keyCode === 13) {
    document.getElementById("send-msg").click();
  }
});

const handlePostClick = name => {
  var string = document.getElementById('text-field').value;
  if(string) {
  sendMessage({ author: name, content: messageReader() });
  clearMessageField();
  }
};

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
