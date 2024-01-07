import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import ShowInput from "./components/ShowInput";
import EmptyItem from "./components/EmptyItem";

const DUMMY_TODO = ["Feed the kids in basement"];
function App() {
  const [todo, setTodo] = useState(DUMMY_TODO);
  const [showError, setShowError] = useState(false);

  const getTodo = newValue => {

    if (newValue.trim() !== "") {
      setTodo((prevTodos) => {
        setShowError(false);
        return [newValue, ...prevTodos];
      });
    } else {
      setShowError(true); // Set error state to true
      console.log("Invalid input: Empty string provided");
    }
    // setTodo(prevExpenses => {
    //   return [newValue,...prevExpenses];
    // });
  }
  const deleteTodo = (index) =>{

    setTodo((prevTodo) => {
      const updatedTodo = [...prevTodo];
      updatedTodo.splice(index,1);
      return updatedTodo;
    });

  }
  
  return (
    <div className="wrapper">
      <UserInput getValue={getTodo}></UserInput>
      {showError && <EmptyItem />} 
      <ShowInput todoList={todo} onDeleteTodo = {deleteTodo}></ShowInput>
    </div>
  );
}

export default App;
