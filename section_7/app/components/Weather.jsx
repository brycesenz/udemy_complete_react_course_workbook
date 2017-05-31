var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) { 
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then( function(temp) {
      that.setState({location: location, temp: temp, isLoading: false});
    }, function(errorMessage) {
      that.setState({errorMessage: errorMessage.data.error.message, isLoading: false });
    });
  },
  render: function() { 
    var { location, temp, isLoading, errorMessage } = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3 className='text-center'>Loading...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      } else if (errorMessage) {
        return <h3 className='text-center'>Error: {errorMessage}</h3>
      }
    }

    return (
      <div>
        <h1 className='text-center'>Weather Component</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;