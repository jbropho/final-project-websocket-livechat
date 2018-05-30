import React, { Component} from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Message from "../src/Message";

var props,
  message;

beforeEach(done => {
  props = {
    author: undefined,
    content: undefined
  };
  message = undefined;
  done();
});

describe('Message', function () {
  const makeMessage = _ => {
    if(!message) {
      message = mount(
        <Message { ...props }/>
      );
    }
  return message;
  }
  
  it('always renders a div', done => {
    const div = makeMessage().find("div");
    expect(div.length).toBeGreaterThan(0);
    done();
  });
});

describe('Rendering contents', function() {
  it('renders the correct message', done => {
    props = {
      author: 'Irbe',
      content: 'SPACES!! VIM!!!'
    }
    const contents = makeMessage();
    expect(contents.contains(<div></div>)).to.equal(true);
  done();
  });
});
 
