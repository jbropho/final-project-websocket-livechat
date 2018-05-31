import React, { Component } from "react";

class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <div className="input">
          <input type="text" id="text-field" maxLength="142" size="142" placeholder="Enter message here..."></input>
        </div>
        <div>
          <input type="button" id="post-message"></input>
        </div>
      </div>
    );
  }
}

export default Footer;
