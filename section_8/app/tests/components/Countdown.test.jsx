var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleCountdown', () => {
    it('should set state to started', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(40);
      expect(countdown.state.count).toEqual(40);
      expect(countdown.state.countdownStatus).toEqual('started');      
    });

    it('should count down', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(40);
      expect(countdown.state.count).toEqual(40);

      setTimeout(() => {
        expect(countdown.state.count).toEqual(39);
        done();
      }, 1001);
    });

    it('should never count below zero', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(1);
      expect(countdown.state.count).toEqual(1);

      setTimeout(() => {
        expect(countdown.state.count).toEqual(0);
        done();
      }, 3001);
    });

    it('should pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(10);
      expect(countdown.state.count).toEqual(10);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toEqual(10);
        done();
      }, 3001);
    });

    it('should stop countdown on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleCountdown(10);
      expect(countdown.state.count).toEqual(10);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toEqual(0);
        done();
      }, 1001);
    });
  });
});

