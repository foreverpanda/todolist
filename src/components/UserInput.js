import React, { useState } from "react";
import './userinput.css'
const UserInput = (props) => {
  const [enteredValue, setValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Entered Item : ", enteredValue);
    props.getValue(enteredValue);
    setValue("");
  };

  const inputChangeHandler = (event) => {
    // console.log(event.target.value);

    setValue(event.target.value);
  };

  return (
    <form className="wrapper container input-box" onSubmit={submitHandler}>
      <label>Enter your goal for today</label>
      <br />
      <input className="input"
        type="text"
        value={enteredValue}
        onChange={inputChangeHandler}
      ></input>
      <br />
      <button className="submitButton" type="submit"> Add Goal </button>
    </form>
  );
};

export default UserInput;
