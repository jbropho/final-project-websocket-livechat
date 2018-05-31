import React, { Component } from "react";
import Header from './chatroomHeader';
import Message from './Message';
import Footer from './Footer';
import Sidebar from './Sidebar';

class Chatroom extends Component {
  render() {
    return(
      <div id="chatroom-container">
        <div>Hello, {this.props.name}</div>
       </div>
    );
  }
        <Header/>
        <Sidebar/>
        <Message/>
        <Footer/>
      </div>

    );
  }
}

export default Chatroom;
