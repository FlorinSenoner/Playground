var React = require('react')
var GreeterMessage = require('GreeterMessage')
var GreeterForm = require('GreeterForm')

// container component (have state)
// should maintains state & renders child components
var Greeter = React.createClass({
  // updating prop values is not allowed in react
  // prop is used to inizialize a component with data
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a default message'
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewInput: function (updates) {
    this.setState(updates) // updating state is fine!
  },

  render: function () {
    var name = this.state.name
    var message = this.state.message
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewInput={this.handleNewInput}/>
      </div>
    )
  }
})

module.exports = Greeter
