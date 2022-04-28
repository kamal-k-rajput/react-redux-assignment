import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
const TodoDetails = () => {
  const { id } = useParams();
  const todos = useSelector((store) => store.todos);
  const [status, setstatus] = useState(gettodo(id).status);
  function togglestatus() {
    setstatus(!status);
  }
  function gettodo(id) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return todos[i];
      }
    }
  }
  return (
    <div>
      <h3>
        complete todo:
        {gettodo(id).title}
      </h3>
      <div> {gettodo(id).details}</div>
      <button onClick={togglestatus}>
        {status ? "Mark as complete" : "Completed"}
      </button>
    </div>
  );
};
export { TodoDetails };
