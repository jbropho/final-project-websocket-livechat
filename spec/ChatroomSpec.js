import React, { Component} from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { shallow } from 'enzyme';
import Chatroom from "../src/Chatroom";



describe('Chatroom', function() {
  var makeChatroom,
    chatroom,
    props;

  beforeEach(done => {
    props = {messages: [{ author: 'Xibit', content: 'Looking 4ward to tha next season of pimp my ride'}]};


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
  it('starts with no messages', done => {
    const result = makeChatroom().find('.message');
    expect(result.length).toEqual(0);
    done();
  })
  it('has a footer', done => {
    const result = makeChatroom().find('.footer');
    expect(result.length).toEqual(1);
    done();
  });
  it('has a sidebar', done => {
    const result = makeChatroom().find('.online_users');
    expect(result.length).toEqual(1);
    done();

  });
  it('renders the content of a message', done => {
    const wrapper = mount(<Chatroom />);
    wrapper.setState({messages: [{ author: 'Xibit', content: 'Looking 4ward to tha next season of pimp my ride'}]});
    const result = wrapper.find('.message');
    const author = result.children().find('.author');
    expect(author.text()).toEqual('Xibit');
    done();
  });





});
