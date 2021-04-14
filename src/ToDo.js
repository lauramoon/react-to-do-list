import { useState } from "react";
import "./ToDo.css";
import ToDoForm from "./ToDoForm";

function ToDo({ todo, removeTodo, editTodo, toggleComplete }) {
  const [showForm, setShowForm] = useState(false);
  const showEditForm = () => setShowForm(true);

  return (
    <li className="ToDo">
      <span
        style={{ textDecorationLine: todo.complete ? "line-through" : "none" }}
      >
        {todo.text + "  "}
      </span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
      <button onClick={showEditForm}>Edit</button>
      <button onClick={() => toggleComplete(todo.id)}>Done?</button>
      {showForm && (
        <ToDoForm
          role="edit"
          editTodo={editTodo}
          todo={todo}
          setShowForm={setShowForm}
        />
      )}
    </li>
  );
}

export default ToDo;
