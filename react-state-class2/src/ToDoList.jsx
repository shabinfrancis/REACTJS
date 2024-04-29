import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

export default function ToDoList() {
    let [todos, setTodos] = useState([{task: "Sample tasks", id: uuidv4()}]);  //gets updated when button is clicked
    let [newTodo, setNewTodo] = useState("");  //gets updated when something is typed or changes in the input 

    let addNewTodo = () => {  //for <button></button>
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    };
    
    let updateTodoValue = (event) => {  // for <input />
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    return (
        <div>
          <h4>ToDo List</h4>
          <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))
            }
          </ul>
          <hr />
          <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue}/>
          <button onClick={addNewTodo}>Add</button>
        </div>
    );
}