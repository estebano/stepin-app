import {
    ADD_TODO, REMOVE_TODO, VisibilityFilters, SET_VISIBILITY_FILTER,
    TOGGLE_TODO
} from '../actions'
import { combineReducers } from 'redux';

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    isDone: false
                }
            ];
        case REMOVE_TODO:
            let newState = [];
            newState = state.filter((val) => (val.text !== action.text));
            return [
                ...newState
            ];
        case TOGGLE_TODO:
            if(action.id in state){
                let todo = state[action.id];
                state[action.id].isDone = !todo.isDone;
            }
            return state;
        default:
            return state;
    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.visibility;
        default: return state;
    }
}

const todoApp = combineReducers({
    todos, visibilityFilter
});

export default todoApp;