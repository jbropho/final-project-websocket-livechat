import React, { Component} from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Footer from "../src/ChatroomComponents/Footer";

describe('footer', function() {
   var makeFooter,
       footer,
       props;

  beforeEach(done => {
    props = { defaultText: 'Enter message here...' };

    makeFooter = _ => {
      footer = mount(<Footer {...props}/>);
      return footer;
    }
    done();
  });

  it('always renders a div', done => {
    const result = makeFooter().find('div');
    expect(result.length).toBeGreaterThan(0);
    done();
  });

  it('has default text', done => {
    const result = makeFooter().find('div').children().find('#text-field');

    expect(result.length).toBeGreaterThan(0);
    done();
  });
});
