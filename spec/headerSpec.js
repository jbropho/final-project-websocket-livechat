import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';
import Header from '../src/ChatroomComponents/Header';

describe('header', function() {
  var makeHeader,
    header,
    props;

  beforeEach(done => {
    props = { title: 'World of Ping Pong', name: 'Jordan' };

    makeHeader = _ => {
      header = mount(<Header {...props}/>);
      return header;
    }

    done();
  });

  it('always renders a div', done => {
    const result = makeHeader().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });

  it('renders a page title', done => {
    const result = makeHeader().find('div');
    var content = result.find('.chatroom-title').text();
    expect(content).toMatch(/World of Ping Pong/);
    done();
  });

  it('renders a welcome for a user', done => {
    const result = makeHeader().find('div');
    var welcome = result.find('.chatroom-welcome').text();
    expect(welcome).toMatch(/Welcome Jordan!/);
    done();
  })
});
