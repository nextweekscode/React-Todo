import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './Todo.css'

const toDoData = [
  {
 
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDo: toDoData,
    }
  }

  toggleComplete = (clickedItemId) => {
    this.setState({
      toDo: this.state.toDo.map((item) => {
        if(item.id === clickedItemId) {
          return {
            ...item, 
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
}

filterComplete = () => {
  this.setState({
    toDo: this.state.toDo.filter(task => task.completed === false)})
  }
     
   

  addToDo = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      toDo: [...this.state.toDo, newItem]
    })
  }
  render() {
    return (
      <div className="App">
      <div className="header">
        <h2>You GOT stuff TO DO!</h2>
        <TodoForm addToDo={this.addToDo}/>
      </div>
      <TodoList toDo={this.state.toDo} 
      toggleComplete={this.toggleComplete}
      filterComplete={this.filterComplete}/>
      </div>
    );
  }
}

export default App;
