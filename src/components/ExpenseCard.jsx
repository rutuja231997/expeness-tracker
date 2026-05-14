import { BiPurchaseTag } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

import { categoryConfig } from "../config/categoryConfig";
import { currencyConfig } from "../config/currencyConfig";

const ExpenseCard = ({
  expenses,
  setExpenses,
  expense,
  rate,
  targetCurrency,
  loading,
}) => {
  const categoryStyle = categoryConfig[expense.category.toLowerCase()];

  const currencySymbol = currencyConfig[targetCurrency]?.symbol;

  const convertedExpense = Number(expense.amount) * rate;

  const handleDelete = () => {
    const filteredExpenses = expenses.filter((item) => item.id !== expense.id);

    setExpenses(filteredExpenses);
  };

  return (
    <div className="group flex justify-between items-center w-full cursor-pointer mt-3 rounded-xl border border-gray-300 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* left section */}
      <div className="flex flex-col items-start gap-3">
        {loading ? (
          <>
            {/* title skeleton */}
            <div className="h-5 w-36 rounded bg-gray-200 animate-pulse" />

            {/* category skeleton */}
            <div className="h-7 w-24 rounded-full bg-gray-200 animate-pulse" />
          </>
        ) : (
          <>
            <h3 className="text-base font-semibold text-gray-900">
              {expense.title}
            </h3>

            <p
              className={`${categoryStyle.bgColor} ${categoryStyle.textColor} px-2 py-1 text-xs flex items-center gap-1 rounded-full font-medium`}
            >
              <BiPurchaseTag color={categoryStyle.iconColor} size={15} />

              <span>{expense.category}</span>
            </p>
          </>
        )}
      </div>

      {/* right section */}
      <div className="flex items-center gap-3">
        {loading ? (
          <>
            {/* amount skeleton */}
            <div className="h-6 w-20 rounded bg-gray-200 animate-pulse" />

            {/* delete button skeleton */}
            <div className="h-9 w-9 rounded-full bg-gray-200 animate-pulse" />
          </>
        ) : (
          <>
            {/* amount */}
            <p className="text-lg font-semibold text-gray-900">
              {currencySymbol}

              {convertedExpense.toFixed(2)}
            </p>

            {/* delete button */}
            <button
              onClick={handleDelete}
              className="h-9 w-9 rounded-full flex items-center justify-center transition-colors hover:bg-red-100"
            >
              <RiDeleteBinLine size={20} color="#000000" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;
