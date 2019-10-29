import React, { useContext } from "react";
import TodoContext from "../../context/Todo/todoContext";

import TodoItem from "./TodoItem";

const Todos = () => {
    const todoContext = useContext(TodoContext);

    let { todos } = todoContext;
    // To sort the array of todos
    todos = todos.sort((a, b) => (a.priority < b.priority ? 1 : -1));

    if (todos.length === 0) {
        return <p className='text'>Please enter a todo...</p>;
    }

    return (
        <div className='todos'>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;
