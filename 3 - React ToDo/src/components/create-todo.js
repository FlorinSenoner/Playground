import React from 'react'

export default class CreateTodo extends React.Component {
  render () {
    return (
      <form>
        <input type="text" placeholder="what to do next?" />
        <button>Create</button>
      </form>
    )
  }
}
