var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  handleCountdown: function(seconds) {
    this.setState({count: seconds});
  },
  render: function() {
    var {count} = this.state;

    return (
      <div className='countdown'>
        <p>Countdown!</p>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleCountdown}/>
      </div>
    );    
  }
})

module.exports = Countdown;