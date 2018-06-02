import React, { Component } from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import RoomList from "../src/ChatroomComponents/RoomList";

describe('RoomList', function() {
  var makeroomList,
      roomList,
      props;
  beforeEach(done => {
    props = {};
    makeroomList = _ => {
      roomList = mount(<RoomList {...props}/>);
      return roomList;
    }
    done();
  });
  it('has a div', done => {
    const result = makeroomList().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });
});
