var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started': 
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      // console.log('counting down');

      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  handleCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function() {
    var {count, countdownStatus} = this.state;

    return (
      <div className='countdown'>
        <p>Countdown!</p>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleCountdown}/>
        <Controls countdownStatus={countdownStatus}/>
      </div>
    );    
  }
})

module.exports = Countdown;