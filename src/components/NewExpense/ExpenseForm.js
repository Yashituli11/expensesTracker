import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // const titleChangeHandler=(event)=> {

  // setUserInput((prevState) => {
  //   return {
  //     ...prevState,
  //     enteredTitle: event.target.value,
  //   }
  // })

  // }

  //alternate approach to userInput
  // const inputHandler = ( indentifier , value) => {
  //   if(indentifier=== "title")
  //   {
  //     setEnteredTitle(value);
  //   }
  //   else if (indentifier === "amount")
  //   {
  //     setEnteredAmount(value);
  //   }
  //   else if (indentifier === "date")
  //   {
  //     setEnteredDate(value);
  //   }
  // }
  // alternate aproach to change state
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions"></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default ExpenseForm;
