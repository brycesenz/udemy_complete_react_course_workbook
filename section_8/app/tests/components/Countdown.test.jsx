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
  });
});

