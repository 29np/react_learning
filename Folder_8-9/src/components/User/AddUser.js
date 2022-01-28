import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef =  useRef();
  const ageInputRef =  useRef();

  // Refs are used for read only purposes.
  // They can be also used (rarely and not a good practice) for changing the DOM element values.

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value, ageInputRef.current.value);
    // nameInputRef.current.value = ''; not a good practice
    // ageInputRef.current.value = ''; not a good practice
    
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        setError("Username and Age cannot be empty!");
      return;
    }
    if (+enteredAge < 1) {
        setError("Age has to be greater than one!");
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const errorHandler = () => {
      setError(null);
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <>
      {error && <ErrorModal title="An error occured!" message={error} onConfirm={errorHandler}/>}
      <Card className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
