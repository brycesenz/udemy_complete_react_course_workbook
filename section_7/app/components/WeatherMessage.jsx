var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>WeatherMessage Component</h3>
      <p>The temperature in {location} is {temp}</p>
    </div>
  );
}

module.exports = WeatherMessage;