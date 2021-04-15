import React,{useState} from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import EditTask from "./EditTask";

const TodoCard = ({deleteTodoHandler,taskObj,index, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
}

const updateTask = (obj) => {
    updateListArray(obj, index)
    document.querySelectorAll('.modal.fade.show')[0].remove();
    document.querySelectorAll('.modal-backdrop.fade.show')[0].remove();
}
  return (
    <Card body inverse key={taskObj.id} className="todolist_card">
      <CardTitle tag="h5" className="card_todo">
        {taskObj.name}
      </CardTitle>
      <CardText className="card_todo">{taskObj.description}</CardText>
      <div className="todo_buttons">
        <Button color="success" onClick = {() => setModal(true)}>Edit</Button>
        <Button onClick={() => deleteTodoHandler(taskObj)} color="danger">
          Delete
        </Button>
      </div>
      <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
    </Card>
    
  );
};

export default TodoCard;
