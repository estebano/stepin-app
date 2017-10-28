import { ADD_TODO } from '../actions'
import { combineReducers } from 'redux';

export function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    isDone: false
                }
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp;