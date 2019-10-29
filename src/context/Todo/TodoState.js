import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import uuid from "uuid";

import { ADD_TODO, MARK_TODO, PIN_TODO, DELETE_TODO } from "../types";

const TodoState = props => {
    const initialState = {
        todos: []
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    // Add Todo
    const addTodo = todo => {
        const newTodo = {
            id: uuid.v4(),
            title: todo.title,
            isCompleted: false,
            priority: getPriority(todo.priority),
            currentPriority: null
        };

        dispatch({
            type: ADD_TODO,
            payload: newTodo
        });
    };

    // get Priority
    const getPriority = priorityText => {
        switch (priorityText) {
            case "little":
                return 1;
            case "medium":
                return 2;
            case "high":
                return 3;
        }
    };

    // To mark todo to complete
    const markTodo = id => {
        dispatch({
            type: MARK_TODO,
            payload: id
        });
    };

    // To pin the todo
    const pinTodo = id => {
        dispatch({
            type: PIN_TODO,
            payload: id
        });
    };

    // To delete the todo
    const deleteTodo = id => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                markTodo,
                pinTodo,
                deleteTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoState;
