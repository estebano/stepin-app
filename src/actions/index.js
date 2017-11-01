
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const removeTodo = (text) => {
    return {
        type: REMOVE_TODO,
        text
    }
}

export const toggleTodo = (id) => (
    {
        type: TOGGLE_TODO,
        id
    }
)

export const setVisibilityFilter = (visibility) => {
    return {
        type: SET_VISIBILITY_FILTER,
        visibility
    }
}