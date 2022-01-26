import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummy_expenses = [
  {
    id: "asdf",
    title: "dfsg",
    amount: "78",
    date: new Date(2019, 3, 12),
  },
  {
    id: "sagv",
    title: "dfhsasdf",
    amount: "615",
    date: new Date(2021, 4, 12),
  },
  {
    id: "asdfhb",
    title: "assfsgdfh",
    amount: "98",
    date: new Date(2020, 2, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
