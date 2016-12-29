var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f1f565951622af80fdadec2ca2e7c957&units=metric&type=like'

// http://api.openweathermap.org/data/2.5/weather?q=Rome,it&appid=f1f565951622af80fdadec2ca2e7c957&units=metric&type=like

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function (res) { // res = response
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        return res.data.main.temp
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
}
