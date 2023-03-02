// import logo from './logo.svg';
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

import "./App.css";
import React from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 194.12,
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.01,
      date: new Date(2022, 5, 12),
    },
  ];

  //JSX Code
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );

  //alternative of above return block
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses,{items:expenses})
  // );
}

export default App;
