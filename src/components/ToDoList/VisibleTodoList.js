
import { VisibilityFilters } from '../../actions'
import * as Actions from '../../actions';
import TodoList  from './TodoList';
import { connect } from 'react-redux';


function getVisibleTodos(todos, visibilityFilter) {
    switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
            return todos.map((e,i)=>{e.id = i; return e;});
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.isDone).map((e,i)=>{e.id = i; return e;});
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.isDone).map((e,i)=>{e.id = i; return e;});
        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(Actions.toggleTodo(id))
        }
    }
} 

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;