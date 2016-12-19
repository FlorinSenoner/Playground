import _ from 'lodash'
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
        <CreateTodo todos={this.state.todo} createTask={this.createTask.bind(this)} />
        <TodoList
          todos={this.state.todo}
          toggleTask={this.toogleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    )
  }

  toogleTask (task) {
    const foundTodo = _.find(this.state.todo, todo => todo.task === task)
    foundTodo.isCompleted = !foundTodo.isCompleted
    this.setState({ todos: this.state.todo })
  }

  createTask (task) {
    this.state.todo.push({
      task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todo })
  }

  saveTask (oldTask, newTask) {
    const foundTodo = _.find(this.state.todo, todo => todo.task === oldTask)
    foundTodo.task = newTask
    this.setState({ todos: this.state.todo })
  }

  deleteTask (taskToDelete) {
    _.remove(this.state.todo, todo => todo.task === taskToDelete)
    this.setState({ todos: this.state.todo })
  }
}
