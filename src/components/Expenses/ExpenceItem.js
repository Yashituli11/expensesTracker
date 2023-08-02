import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenceItem({ date, title, amount }) {
  // const [titles, setTitle] = useState(title);
  console.log("ExpenseItem is Updated");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenceItem;
