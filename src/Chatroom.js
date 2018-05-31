import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Chatroom extends Component {
  render() {
    return(
      <div id="chatroom-container">
        <Header/>
        <Sidebar/>
        <Message author="North"/>
        <Footer/>
      </div>

    );
  }

}
export default Chatroom;


// {this.props.messages.map(function(msg) {
//   <Message {...msg} />;
//  })}
