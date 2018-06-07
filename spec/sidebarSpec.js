import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Sidebar from '../src/ChatroomComponents/Sidebar';

describe('Sidebar', function() {

  var makeSidebar,
    sidebar,
    props;

  beforeEach(done => {
    props = {};
    makeSidebar = _ => {
      sidebar = mount(<Sidebar {...props}/>);
      return sidebar;
    };
    done();
  });

  it('has a div', done => {
    const result = makeSidebar().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });
});
