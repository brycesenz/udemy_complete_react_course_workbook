var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3 className='text-center'>The temperature in {location} is {temp}</h3>
    </div>
  );
}

module.exports = WeatherMessage;