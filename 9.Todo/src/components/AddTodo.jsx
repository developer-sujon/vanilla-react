import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const initialState = {
  title: "",
  body: "",
  agre: false,
};

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState(initialState);

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
      addTodo(todo);
      setTodo(initialState);
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
      <Button variant="primary" type="submit" disabled={!todo.agre}>
        Submit
      </Button>
    </Form>
  );
};

export default AddTodo;
