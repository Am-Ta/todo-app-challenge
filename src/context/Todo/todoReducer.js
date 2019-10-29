import { ADD_TODO, MARK_TODO, PIN_TODO, DELETE_TODO } from "../types";

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case MARK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.payload
                        ? {
                              ...todo,
                              isCompleted: !todo.isCompleted,
                              priority: !todo.isCompleted
                                  ? 0
                                  : todo.currentPriority,
                              currentPriority: !todo.isCompleted
                                  ? todo.priority
                                  : null
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
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};
