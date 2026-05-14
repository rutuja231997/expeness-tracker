import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { CurrencyContext } from "../context/CurrencyConverterContext";

import Card from "./Card";
import { currencyConfig } from "../config/currencyConfig";
import { summaryCardConfig } from "../config/summaryCardConfig";

const SummaryCard = () => {
  const { expenses } = useContext(ExpenseContext);

  const { rate, targetCurrency, loading } = useContext(CurrencyContext);

  const currencySymbol = currencyConfig[targetCurrency]?.symbol;

  const summaryCards = Object.entries(summaryCardConfig).map(
    ([key, config]) => {
      let totalAmount =
        key === "total"
          ? expenses.reduce(
              (total, expense) => total + Number(expense.amount),
              0,
            )
          : expenses.reduce((total, expense) => {
              const expenseCategory = expense.category.toLowerCase();

              if (config.categories.includes(expenseCategory)) {
                total += Number(expense.amount);
              }
              return total;
            }, 0);
      return {
        ...config,
        amount: totalAmount * rate,
      };
    },
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {summaryCards.map((card) => {
        return (
          <Card
            key={card.label}
            text={card.label}
            data={`${currencySymbol} ${card.amount.toFixed(2)}`}
            icon={card.icon}
            iconBgColor={card.bgColor}
            iconColor={card.iconColor}
            loading={loading}
          />
        );
      })}
    </div>
  );
};

export default SummaryCard;
