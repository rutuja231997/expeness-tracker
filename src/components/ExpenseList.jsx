import { useContext } from "react";

import { IoSearchOutline } from "react-icons/io5";

import { ExpenseContext } from "../context/ExpenseContext";

import { CurrencyContext } from "../context/CurrencyConverterContext";

import ExpenseCard from "./ExpenseCard";

import { category_arr } from "../constants/categories";

const ExpenseList = ({ className, expensesListRef }) => {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const { rate, targetCurrency } = useContext(CurrencyContext);

  return (
    <section
      id="expense-list"
      ref={expensesListRef}
      className={`
        ${className}
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        sm:p-6
        shadow-sm
      `}
    >
      {/* top section */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          mb-6
        "
      >
        {/* heading */}
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Expenses
          </h2>

          <p className="text-sm text-gray-500">{expenses.length} item(s)</p>
        </div>

        {/* search + dropdown */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            gap-3
            w-full
            lg:w-auto
          "
        >
          {/* search input */}
          <div
            className="
              flex
              items-center
              gap-2
              border
              border-gray-300
              rounded-xl
              px-3
              py-2
              bg-white
              w-full
              sm:w-auto
            "
          >
            <IoSearchOutline size={20} color="#6b7280" />

            <input
              type="text"
              placeholder="Search expenses..."
              className="
                outline-none
                w-full
                text-sm
                text-gray-700
                placeholder:text-gray-400
                bg-transparent
              "
            />
          </div>

          {/* category dropdown */}
          <select
            className="
              border
              border-gray-300
              rounded-xl
              px-4
              py-2
              text-sm
              text-gray-700
              outline-none
              bg-white
              w-full
              sm:w-auto
            "
          >
            <option value="">All Categories</option>

            {category_arr.map((c) => (
              <option key={c.id} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* expense cards */}
      {expenses.length === 0 ? (
        <div
          className="
            flex
            justify-center
            items-center
            h-40
            text-gray-500
          "
        >
          No expenses added yet
        </div>
      ) : (
        <div className="space-y-3">
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              expenses={expenses}
              setExpenses={setExpenses}
              rate={rate}
              targetCurrency={targetCurrency}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ExpenseList;
