import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import TodoContext from "../../context/Todo/todoContext";

const TodoItem = ({ todo }) => {
    const todoContext = useContext(TodoContext);
    const { markTodo, pinTodo, deleteTodo } = todoContext;

    // Handle the Changes for checkbox
    const handleChange = () => markTodo(todo.id);

    // Handle Click for the higest priority
    const pinClick = () => !todo.isCompleted && pinTodo(todo.id);

    // Handle click to delete the todo
    const deleteClick = () => deleteTodo(todo.id);

    // get todo class
    const getTodoClass = () => {
        switch (todo.priority) {
            case 0:
                return "todo todo_complete";
            case 1:
                return "todo todo_little";
            case 2:
                return "todo todo_medium";
            case 3:
                return "todo todo_high";
            case 4:
                return "todo todo_pin";
        }
    };

    // To style the title of the todo item
    const todoTitleStyle = {
        textDecoration: todo.isCompleted ? "line-through" : "none"
    };

    return (
        <div className={getTodoClass()}>
            <input
                type='checkbox'
                checked={todo.isCompleted}
                value={todo.isCompleted}
                onChange={handleChange}
            />

            <p className='todo__title' style={todoTitleStyle}>
                {todo.title}
            </p>

            <a href='#' onClick={pinClick} className='text-link'>
                <i className='fas fa-thumbtack'></i>
            </a>

            <a href='#' onClick={deleteClick} className='text-link'>
                <i className='fas fa-trash-alt'></i>
            </a>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.shape({
        title: PropTypes.string,
        isCompleted: PropTypes.bool
    })
};

export default TodoItem;
