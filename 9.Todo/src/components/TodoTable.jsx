import React from "react";
import { Table, Button } from "react-bootstrap";

const TodoTable = ({ todos, editTodo, removeTodo }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.length > 0 ? (
          todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={(e) => editTodo(todo)}
                    className="me-2"
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={(e) => removeTodo(todo.id)}
                    className="me-2"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td border="0">
              <h5>No Todos Here</h5>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TodoTable;
