import React from "react";
import { useState } from "react";
import { addTodo } from "./Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos); // use context
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const handleEvent = (e) => {
    e.preventDefault();
    settitle(e.target.value);
  };
  const handleSubmit = () => {
    let todoinput = {
      title: title,
      details: details,
      id: nanoid(4),
      status: false,
    };
    if (title !== "") {
      dispatch(addTodo(todoinput));
    } else {
      alert("title can not be empty");
    }
  };
  const handleDetails = (e) => {
    e.preventDefault();
    setdetails(e.target.value);
  };
  return (
    <div>
      <h3>Todo application</h3>
      <input type="text" onChange={handleEvent} placeholder="Title here..." />
      <input type="text" onChange={handleDetails} placeholder="Enter Details" />
      <button onClick={handleSubmit}>Add Todo</button>
      {todos.map((todo) => {
        return (
          <Link to={`/todo/${todo.id}`} key={nanoid(4)}>
            {todo.title}
          </Link>
        );
      })}
    </div>
  );
};

export { Todo };

//rafce
