var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toEqual('01:02')
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds with large remainder', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      expect(clock.formatSeconds(seconds)).toEqual('10:15');
    });

    it('should format seconds with small remainder', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 605;
      expect(clock.formatSeconds(seconds)).toEqual('10:05');
    });

    it('should format seconds with small minutes', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      expect(clock.formatSeconds(seconds)).toEqual('01:01');
    });
  });
});

