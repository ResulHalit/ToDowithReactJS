import React from "react";
import Todo from "./todo";

function TodoList({todos}) {
    return(
        <ul>
            {todos.map(todo =>{
                <Todo key={todo.id} todo={todo}/>
            })}
        </ul>
    );
};

export default TodoList;