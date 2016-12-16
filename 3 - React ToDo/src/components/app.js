import React from 'react'
import CreateTodo from './create-todo'
import TodoList from './todo-list'

const todo = [
  {
    task: 'ride a unicorn',
    isCompleted: true
  },
  {
    task: 'study Latin',
    isCompleted: false
  }
]

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todo
    }
  }

  render () {
    return (
      <div>
        <h1>React ToDo</h1>
        <CreateTodo />
        <TodoList todos={this.state.todo} />
      </div>
    )
  }
}
