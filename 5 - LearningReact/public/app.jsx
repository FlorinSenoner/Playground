// presentation component (don't have state)
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

// presentation component (don't have state)
// should only render children
var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault()

    var updates = {}

    var name = this.refs.name.value
    var message = this.refs.message.value

    if (name.length > 0) {
      this.refs.name.value = ''
      updates.name = name
    }

    if (message.length > 0) {
      this.refs.message.value = ''
      updates.message = message
    }

    this.props.onNewInput(updates)
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter Message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
})

// container component (have state)
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

var firstName = 'Florin'
var personalMessage = 'this is your personal message'

ReactDOM.render(
  <Greeter name={firstName} message={personalMessage} />,
  document.getElementById('app')
)
