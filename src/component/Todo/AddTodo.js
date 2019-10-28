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

        addTodo(todo);
        setTodo({ title: "", priority: "little" });
    };
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__item'>
                    <input
                        type='text'
                        name='title'
                        className='form__input'
                        onChange={handleChange}
                        value={todo.title}
                    />
                </div>

                <div className='form__item'>
                    <select
                        name='priority'
                        value={todo.priority}
                        onChange={handleChange}
                    >
                        <option disabled>--Please choose an priority--</option>
                        <option value='little'>Little</option>
                        <option value='medium'>Medium</option>
                        <option value='high'>High</option>
                    </select>
                </div>

                <div className='form__item'>
                    <button type='submit' className='btn btn_primary'>
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
