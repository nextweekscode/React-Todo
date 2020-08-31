// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.toDo.map((item) => (
                <Todo 
                key={item.id}
                item={item}
                toggleComplete={props.toggleComplete}
                />
            ))}
             <button className="clear-btn" onClick={props.filterComplete}>
                Clear Task
            </button>
        </div>
    )
}

export default TodoList