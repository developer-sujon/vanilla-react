import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditTodo = ({ currentTodos, updateTodo }) => {
  const [todo, setTodo] = useState(currentTodos);

  useEffect(() => {
    setTodo(currentTodos);
  }, [currentTodos]);

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    setTodo({
      ...todo,
      agre: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title && todo.body) {
      updateTodo(todo.id, todo);
    } else {
      alert("Please input title and body");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={todo.title}
          onChange={(e) => handleChange(e)}
          name="title"
          placeholder="Title"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="body">
        <Form.Label>Body</Form.Label>
        <Form.Control
          value={todo.body}
          onChange={(e) => handleChange(e)}
          name="body"
          placeholder="Body"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="agre">
        <Form.Check
          type="checkbox"
          label="Check to agre"
          checked={todo.agre}
          name="agre"
          onChange={(e) => handleCheckbox(e)}
        />
      </Form.Group>
      <Button variant="warning" type="submit" disabled={!todo.agre}>
        Update Todo
      </Button>
    </Form>
  );
};

export default EditTodo;
