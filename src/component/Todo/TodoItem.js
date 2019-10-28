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

    return (
        <div className='todo__item'>
            <input
                type='checkbox'
                checked={todo.isCompleted}
                value={todo.isCompleted}
                onChange={handleChange}
            />

            <h3 className='todo__title'>{todo.title}</h3>
            <a href='#' onClick={handleClick}>
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
