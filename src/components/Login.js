import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Todo from "./Todo";
const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [todo, setHome] = useState(true);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const nameSubmitHandler = (e) => {
    e.preventDefault();
    setFirstName(firstName);
    if (firstName === "") {
        console.log("EMPTY");
    } else {
        setHome(!todo);
    }
  };

  const saveLocal = () => {
    localStorage.setItem("firstName", JSON.stringify(firstName));
  };
  const getLocal = () => {
    if (localStorage.getItem("firstName") === null) {
      localStorage.setItem("firstName", JSON.stringify([]));
    } else {
      let localfirstName = JSON.parse(localStorage.getItem("firstName"));
      setFirstName(localfirstName);
    }
  };

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    saveLocal();
  }, [firstName]);
  return (
    <div>
      {todo ? (
        <div className="form_login_div">
        <Form className="form_part">
          <FormGroup>
            <Label for="firstName">FirstName</Label>
            <Input
              value={firstName}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter Your Name"
              onChange={firstNameHandler}
            />
          </FormGroup>
          <Button onClick={nameSubmitHandler} className="btn btn-success">
            Login
          </Button>
        </Form>
        </div>
      ) : (
        <Todo firstName={firstName}/>
      )}
    </div>
  );
};

export default Login;
