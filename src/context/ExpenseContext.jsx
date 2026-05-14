import { createContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  //get expenses from localstorage
  const storedExpenses = localStorage.getItem("expenses");

  //convert string to array
  const parsedExpenses = storedExpenses ? JSON.parse(storedExpenses) : [];

  //state
  const [expenses, setExpenses] = useState(parsedExpenses);

  //save expenses to localstorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export { ExpenseProvider, ExpenseContext };
