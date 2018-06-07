import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import MessageBoard from '../src/ChatroomComponents/MessageBoard';

describe('MessageBoard', function() {
  var makeMessageBoard,
    messageBoard,
    props;

  beforeEach(done => {
    props = { messageList: [ {}, {}, {}]};
    makeMessageBoard = _ => {
      messageBoard = mount(<MessageBoard {...props}/>);
      return messageBoard;
    };
    done();
  });

  it('has a div', done => {
    const result = makeMessageBoard().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });

  it('renders messages', done => {
    const result = makeMessageBoard().find('.message');
    expect(result.length).toBe(3);
    done();
  })
});
