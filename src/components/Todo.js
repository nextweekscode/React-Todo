import React from 'react'

const Todo = (props) => {
    return (
        <div onClick={() => props.toggleComplete(props.item.id)}
        className={`item${props.item.completed ? " completed" : ""}`}>
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo