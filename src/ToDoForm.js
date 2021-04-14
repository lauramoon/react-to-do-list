import React, { useState } from "react";
import "./ToDoForm.css";

function ToDoForm(props) {
  const role = props.role;
  let INITIAL_STATE = { text: "" };
  if (role === "edit") {
    INITIAL_STATE.text = props.todo.text;
  }
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (role === "add") {
      props.addTodo(formData);
    } else {
      props.editTodo(props.todo.id, formData.text);
      props.setShowForm(false);
    }

    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="ToDoForm">
      <label htmlFor="text">{role === "add" ? "New To-do: " : "Edit: "}</label>
      <input
        type="text"
        id="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />

      <button>{role === "add" ? "Add!" : "Edit"}</button>
    </form>
  );
}

export default ToDoForm;
