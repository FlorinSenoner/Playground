var React = require('react')
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoadin: false
    }
  },

  handleSearch: function (location) {
    var that = this

    this.setState({isLoading: true})

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      alert(errorMessage)
    })
  },

  render: function () {
    var {isLoading, location, temp} = this.state // es6 deconstructor

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetsching Weather...</h3>
      } else if (temp && location) {
        <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
})

module.exports = Weather
