import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

const TodoList = ({ todos,deleteTodoHandler}) => {
 
  return (
    <div className="todolist_cnt">
      {todos.map((todo) => (
        <Card body inverse  key={todo.id} className="todolist_card">
          <CardTitle tag="h5" className="card_todo">
            {todo.name}
          </CardTitle>
          <CardText className="card_todo">
            {todo.description}
          </CardText>
          <div className="todo_buttons">
            <Button color="success">Edit</Button>
            <Button onClick={()=>deleteTodoHandler(todo)} color="danger">Delete</Button>
          </div>
          
        </Card>
        
      ))}
    </div>
  );
};

export default TodoList;
