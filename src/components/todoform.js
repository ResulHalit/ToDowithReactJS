import React, {useState} from 'react';
import uuid from 'uuid';

function TodoForm(){
    const [todo, setTodos] = useState({
        id:"",
        task:"",
        completed:false
    });

    function handleTaskInputChange(e) {
        setTodos({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuid.v4()});
            // reset task input
            setTodos({...todo, task:""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name='task'
            type='text'
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <button type='submit'></button>
        </form>
    );
};

export default TodoForm;