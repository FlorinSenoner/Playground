var React = require('react')
var ReactDOM = require('react-dom')
var Greeter = require('Greeter')

var firstName = 'Florin'
var personalMessage = 'this is your personal message'

ReactDOM.render(
  <Greeter name={firstName} message={personalMessage} />,
  document.getElementById('app')
)
