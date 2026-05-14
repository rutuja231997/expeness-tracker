import { createContext, useState } from "react";
import useCurrencyConverter from "../hooks/useCurrencyConverter";

const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [baseCurrency] = useState("INR");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const { rate, loading, error } = useCurrencyConverter(
    baseCurrency,
    targetCurrency,
  );

  return (
    <CurrencyContext.Provider
      value={{
        baseCurrency,
        targetCurrency,
        setTargetCurrency,
        rate,
        loading,
        error,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export { CurrencyProvider, CurrencyContext };
