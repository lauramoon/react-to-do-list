import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    return (
      <ul>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    );
  };

  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid(), complete: false };
    setTodos((todos) => [...todos, newTodo]);
  };

  const editTodo = (id, text) => {
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo} role="add" />
      {renderTodos()}
    </div>
  );
}

export default ToDoList;
