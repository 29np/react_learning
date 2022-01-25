import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  // react passes all the parameters as props object
  const [title, setTtile] = useState(props.title);

  function clickHandler() {
    setTtile("Updated!");
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
// Ctrl + Shift + I // to auto format;
// ExpenseItem can return only one compotent do put multiple components inside div
export default ExpenseItem;
