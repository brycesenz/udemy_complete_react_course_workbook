var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render the clear and pause buttons when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);

      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toEqual(1);

      var $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toEqual(0);

      var $clearButton = $el.find('button:contains(Clear)');
      expect($clearButton.length).toEqual(1);
    });

    it('should render the clear and start buttons when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);

      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');
      expect($pauseButton.length).toEqual(0);

      var $startButton = $el.find('button:contains(Start)');
      expect($startButton.length).toEqual(1);

      var $clearButton = $el.find('button:contains(Clear)');
      expect($clearButton.length).toEqual(1);
    });
  });
});

