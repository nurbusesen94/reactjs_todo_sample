import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const TodoForm = ({
  todoName,
  todoDescription,
  todoSubmitHandler,
  todoDescriptionHandler,
  todoNameHandler
}) => {


  return (
    <Form>
      <FormGroup>
        <Label for="todoName">TodoName</Label>
        <Input
          value={todoName}
          type="text"
          name="todoName"
          id="todoName"
          placeholder="Enter Todo Name"
          onChange={todoNameHandler}
        />
      </FormGroup>
      <FormGroup>
        <Label for="todoDescription">Description</Label>
        <Input
          value={todoDescription}
          type="textarea"
          name="todoDescription"
          id="todoDescription"
          onChange={todoDescriptionHandler}
        />
      </FormGroup>
      <Button disabled={!todoName} onClick={todoSubmitHandler} className="btn btn-primary" color="primary">
        Adds
      </Button>
    </Form>
  );
};

export default TodoForm;
