import React from 'react'
import PropTypes from 'prop-types'


class Todo extends React.Component {
    render() {
        return (<li
            onClick={this.props.onClick}
            style={{
                textDecoration: this.props.isDone ? 'line-through' : 'none'
            }}>
            {this.props.text}
        </li>)
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    isDone: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo