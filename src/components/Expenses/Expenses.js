import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  // const [filterInfoText, setFilterInfoText] = useState("2021,2022 & 2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // if (selectedYear === "2021") {
    //   setFilterInfoText("2020, 2022 & 2023");
    // } else if (selectedYear === "2022") {
    //   setFilterInfoText("2020, 2021 & 2023");
    // } else if (selectedYear === "2023") {
    //   setFilterInfoText("2020,2021 & 2022");
    // } else {
    //   setFilterInfoText("2021, 2022 & 2023");
    // }
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
