import { Routes, Route } from "react-router-dom";
import { Todo } from "./components/Todo";
import { TodoDetails } from "./components/TodoDetails";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<TodoDetails />}></Route>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
