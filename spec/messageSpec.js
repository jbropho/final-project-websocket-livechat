import React, { Component} from "react";
import ReactDOM from "react-dom";
import testUtils from "react-dom";
import Message from "../src/Message";

describe('Message', function () {
  var element, component;
	it('displays a message', function(){
    element = React.createElement(
      Message,
      {

      }

  );
  expect(function() {
    component = testUtils.renderIntoDocument(element);
  }).not.toThrow();

});
})
