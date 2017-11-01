import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => (
                    <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />
                ))}
            </ul>);

    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isDone: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList