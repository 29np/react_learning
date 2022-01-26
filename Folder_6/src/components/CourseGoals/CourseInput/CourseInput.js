import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {

  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  
  const goalInputChangeHandler = (event) => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return 0;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}> 
      {/* Dynamically adding css classes to html objects */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
