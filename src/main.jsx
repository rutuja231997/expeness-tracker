import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";
import { CurrencyProvider } from "./context/CurrencyConverterContext.jsx";

createRoot(document.getElementById("root")).render(
  <ExpenseProvider>
    <CurrencyProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CurrencyProvider>
  </ExpenseProvider>,
);
