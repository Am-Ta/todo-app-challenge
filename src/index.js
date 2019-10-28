import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TodoState from "./context/Todo/TodoState";

ReactDOM.render(
    <TodoState>
        <App />
    </TodoState>,
    document.getElementById("root")
);
