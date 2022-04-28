import React from "react";
import { useState } from "react";
import { addTodo } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
// import { nanoid } from "nanoid";
const Todo = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todos); // use context

  const [text, settext] = useState("");
  const handleEvent = (e) => {
    e.preventDefault();
    settext(e.target.value);
  };
  const handleSubmit = () => {
    if (text !== "") {
      dispatch(addTodo(text));
    }
  };
  return (
    <div>
      <h3>Todo application</h3>
      <input type="text" onChange={handleEvent} />
      <button onClick={handleSubmit}>Add Todo</button>
      {todos.map((todo) => {
        return <div key={nanoid(3)}>{todo}</div>;
      })}
    </div>
  );
};

export { Todo };

//rafce
