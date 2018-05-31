import React, { Component} from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Chatroom from "../src/Chatroom";



describe('Chatroom', function() {
  var makeChatroom,
      chatroom,
      props;

  beforeEach(done => {
     props = { thing: 'stuff' };

     makeChatroom = _ => {
        chatroom = mount(<Chatroom {...props}/>)
        return chatroom;
     };
     done();
  });

  it('always renders a div', done => {
     const result = makeChatroom().find('#chatroom-container');
     expect(result.length).toBeGreaterThan(0);
     done();
  });

  it('has a header', done => {
     const result = makeChatroom().find('#chatroom-header');
     expect(result.length).toBeGreaterThan(0);
     done();
  });


});
