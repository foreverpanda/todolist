import React from "react";
import './ShowInput.css'

const ShowInput = (props) => {
  return (
    <div>
      <h2>Todo List</h2>
 

      <ul className="todoList" >
        {props.todoList.map((todo, index) => (
          <li key={index} className="todoItem" onClick={() => props.onDeleteTodo(index)}>
            {todo} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowInput;
