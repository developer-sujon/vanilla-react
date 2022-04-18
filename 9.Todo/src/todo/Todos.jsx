import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTodo from "../components/AddTodo";
import EditTodo from "../components/EditTodo";
import TodoTable from "../components/TodoTable";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [editable, setEditable] = useState(false);
  const [currentTodos, setCurrentTodos] = useState({
    id: null,
    title: "",
    body: "",
  });

  const addTodo = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    setEditable(false);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (todo) => {
    setEditable(true);
    setCurrentTodos(todo);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          {editable ? (
            <EditTodo updateTodo={updateTodo} currentTodos={currentTodos} />
          ) : (
            <AddTodo addTodo={addTodo} />
          )}
        </Col>
        <Col md={6}>
          <TodoTable
            removeTodo={removeTodo}
            editTodo={editTodo}
            todos={todos}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
