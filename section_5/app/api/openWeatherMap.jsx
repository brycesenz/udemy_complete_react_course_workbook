// http://api.openweathermap.org/data/2.5/weather?q=Jacksonville,FL&units=imperial&appid=639b69c4897c4a9795ea8105fcae97f4
// 639b69c4897c4a9795ea8105fcae97f4

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=639b69c4897c4a9795ea8105fcae97f4&units=imperial'

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(response) {
      if (response.data.cod && response.data.message) { 
        throw new Error(response.data.message);
      } else { 
        // returning temperation
        return response.data.main.temp;
      }
    }, function(response) {
      throw new Error(response.data.message);
    });
  }
}