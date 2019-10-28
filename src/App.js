import React from "react";
import Todos from "./component/Todo/Todos";
import AddTodo from "./component/Todo/AddTodo";

import "./App.scss";

const App = () => {
    return (
        <div>
            <AddTodo />
            <Todos />
        </div>
    );
};

export default App;
