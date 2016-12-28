var React = require('react')

// presentation component (don't have state)
// uses props to display information
var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name
    var message = this.props.message

    return (
      <div>
        <h1>Hallo {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
})

module.exports = GreeterMessage // like 'return' in functions
