import React, { Component} from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Message from "../src/ChatroomComponents/Message";

var props,
  message,
  makeMessage,
  children;

beforeEach(done => {
  props = {
    author: 'Irbe',
    content: 'SPACES!! VIM!!!'
  };
  message = undefined;
   makeMessage = _ => {
    if(!message) {
      message = mount(
        <Message { ...props }/>
      );
    }
  return message;
  }
  done();
});

describe('Message', function () {
  it('always renders a div', done => {
    const div = makeMessage().find("div");
    expect(div.length).toBeGreaterThan(0);
    done();
  });
});

describe('Rendering author', function() {
  it('shows the correct author', done => {
    const children = makeMessage().find('div').children();
    const author = children.find('.author').text();
    expect(author).toBe('Irbe');
  done();
  });
});

describe('Rendering message', function() {
  it('shows the correct message', done => {
    const children = makeMessage().find('div').children();
    const content = children.find('.content').text();
    expect(content).toBe('SPACES!! VIM!!!');
  done();
  });
});
