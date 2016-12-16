import React from 'react'

export default class CreateTodo extends React.Component {
  render () {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="what to do next?" ref="createInput" />
        <button>Create</button>
      </form>
    )
  }

  handleCreate (event) {
    event.preventDefault() // prevents page reload on submit
    this.props.createTask(this.refs.createInput.value)
    this.refs.createInput.value = ''
  }
}
