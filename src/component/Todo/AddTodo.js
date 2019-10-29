import React, { useState, useContext } from "react";
import TodoContext from "../../context/Todo/todoContext";

const AddTodo = () => {
    const [todo, setTodo] = useState({ title: "", priority: "little" });

    const todoContext = useContext(TodoContext);
    const { addTodo } = todoContext;

    // Handle the changes on the form elements
    const handleChange = e => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    // Add todo
    const handleSubmit = e => {
        e.preventDefault();
        if (todo.title !== "") {
            addTodo(todo);
            setTodo({ title: "", priority: "little" });
        }
    };
    return (
        <div className='add-todo'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <input
                        type='text'
                        name='title'
                        className='form__input'
                        onChange={handleChange}
                        value={todo.title}
                        placeholder='Enter a todo...'
                    />
                </div>

                <div className='form__item'>
                    <select
                        name='priority'
                        value={todo.priority}
                        onChange={handleChange}
                        className='form__select'
                    >
                        <option disabled>--Please choose an priority--</option>
                        <option value='little'>Little</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>

                <div className='form__item'>
                    <button type='submit' className='btn btn_primary'>
                        <i className='fas fa-check'></i> Add Todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
