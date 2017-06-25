var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should set state to new state', () => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.timerStatus).toEqual('started');      
    });

    it('should count up', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.count).toEqual(0);

      setTimeout(() => {
        expect(timer.state.timerStatus).toEqual('started');
        expect(timer.state.count).toEqual(1);
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.timerStatus).toEqual('paused');
        expect(timer.state.count).toEqual(10);
        done();
      }, 1001);
    });

    it('should reset timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.timerStatus).toEqual('stopped');
        expect(timer.state.count).toEqual(0);
        done();
      }, 1001);
    });
  });
});

