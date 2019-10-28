import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import TodoContext from "../../context/Todo/todoContext";

const TodoItem = ({ todo }) => {
    const todoContext = useContext(TodoContext);
    const { updateTodo, pinTodo } = todoContext;

    // Handle the Changes for checkbox
    const handleChange = () => updateTodo(todo.id);

    // Handle Click for the higest priority
    const handleClick = () => !todo.isCompleted && pinTodo(todo.id);

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

    return (
        <div className={getTodoClass()}>
            <input
                type='checkbox'
                checked={todo.isCompleted}
                value={todo.isCompleted}
                onChange={handleChange}
            />

            <h3 className='todo__title'>{todo.title}</h3>
            <a href='#' onClick={handleClick} className='text-link'>
                <i className='fas fa-thumbtack'></i>
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
