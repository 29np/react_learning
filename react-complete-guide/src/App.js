import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "asdf",
      title: "dfsg",
      amount: "78",
      date: new Date(2021, 3, 12),
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
      date: new Date(2021, 2, 12),
    },
  ];

  const addExpenseHandler = expense => {
    console.log("In APP");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </div>
  );
}

export default App;
