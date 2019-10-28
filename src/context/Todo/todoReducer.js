import { ADD_TODO, UPDATE_TODO, PIN_TODO } from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.payload
                        ? {
                              ...todo,
                              isCompleted: !todo.isCompleted,
                              priority: 0
                          }
                        : todo;
                })
            };
        case PIN_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.payload
                        ? {
                              ...todo,
                              priority: 4
                          }
                        : todo;
                })
            };
        default:
            return state;
    }
};
