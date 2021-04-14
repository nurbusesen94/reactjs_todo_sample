import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = ({ firstName}) => {
  const [todoName, setTodoName] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todos, setTodos] = useState([]);

 
  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localtodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localtodos);
    }
  };

  const deleteTodoHandler = (todo) => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const todoNameHandler = (e) => {
    setTodoName(e.target.value);
  };
  const todoDescriptionHandler = (e) => {
    setTodoDescription(e.target.value);
  };
  const todoSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        name: todoName,
        description: todoDescription,
        id: Math.floor(Math.random() * 100000),
      },
    ]);
    setTodoName("");
    setTodoDescription("");
  };

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [todos]);

  return (
    <div>
      <Row className="main_row">
        <Col xs={2}>
          <div><img src="https://virtualgallery1-293846.c.cdn77.org/img_HTML/mr_nobody_new.svg" alt=""></img>
          <h4 className="mt-3"> {firstName}'s todo List!</h4></div>
        </Col>
        <Col xs={10}>
          <Row>
            <div className="todo_form">
              <TodoForm
                todoName={todoName}
                todoDescription={todoDescription}
                todos={todos}
                setTodos={setTodos}
                setTodoName={setTodoName}
                setTodoDescription={setTodoDescription}
                todoNameHandler={todoNameHandler}
                todoDescriptionHandler={todoDescriptionHandler}
                todoSubmitHandler={todoSubmitHandler}
              ></TodoForm>
            </div>
          </Row>
          <Row>
            <div className="mt-5">
              <TodoList
                todoDescription={todoDescription}
                todoName={todoName}
                setTodos={setTodos}
                todos={todos}
                deleteTodoHandler={deleteTodoHandler}
              ></TodoList>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Todo;
