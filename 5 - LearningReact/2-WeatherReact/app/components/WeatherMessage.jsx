var React = require('react')

var WeatherMessage = ({location, temp}) => { // es6 destructorin -> define location and temp with {} instead of props
  return (
    <p>It is {temp}°C in {location}</p>
  )
}

module.exports = WeatherMessage
