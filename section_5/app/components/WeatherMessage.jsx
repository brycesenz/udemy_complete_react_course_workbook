var React = require('react');

var WeatherMessage = React.createClass({
  render: function() { 
    var {location, temp} = this.props;

    return (
      <div>
        <h3>WeatherMessage Component</h3>
        <p>The temperature in {location} is {temp}</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;