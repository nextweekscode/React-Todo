import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: '',
        }
    }

    handleChanges = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.item)
        this.setState({ item: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='item'
                placeholder="add a task..."
                value={this.state.item}
                onChange={this.handleChanges}
                />
                <button type="submit">Add</button>
           
            </form>
        ) 
        
    }
}

export default TodoForm