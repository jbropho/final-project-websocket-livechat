import React, { Component } from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import MessageBoard from "../src/MessageBoard";

describe('MessageBoard', function() {
  var makeMessageBoard,
      messageBoard,
      props;
  beforeEach(done => {
    props = {};
    makeMessageBoard = _ => {
      messageBoard = mount(<MessageBoard {...props}/>);
      return messageBoard;
    }
    done();
  });
  it('has a div', done => {
    const result = makeMessageBoard().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });
});
