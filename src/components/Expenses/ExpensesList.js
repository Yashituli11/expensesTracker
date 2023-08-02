import "./ExpensesList.css";
import React from "react";
import ExpenceItem from "./ExpenceItem";
const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenceItem
          title={expense.title}
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
