import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import RoomList from '../src/ChatroomComponents/RoomList';

describe('RoomList', function() {

  var makeroomList,
    roomList,
    props;

  beforeEach(done => {
    props = {roomlist: ['ThaShizznit']};
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
  
  it('will list a room', done => {
    const result = makeroomList().find('.chatroom-list');
    const a_room_on_the_list = result.text();
    expect(a_room_on_the_list).toMatch(/ThaShizznit/);
    done();
  });
});
