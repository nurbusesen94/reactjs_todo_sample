import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  deleteTodoHandler,
  todoName,
  todoDescription,
  setTodoName,
  setTodoDescription,
  updateListArray,
}) => {
  return (
    <div className="todolist_cnt">
      {todos.map((obj, index) => (
        <TodoCard
          key={obj.id}
          deleteTodoHandler={deleteTodoHandler}
          taskObj={obj}
          index={index}
          todoName={todoName}
          todoDescription={todoDescription}
          setTodoName={setTodoName}
          setTodoDescription={setTodoDescription}
          updateListArray={updateListArray}
        ></TodoCard>
      ))}
    </div>
  );
};

export default TodoList;
