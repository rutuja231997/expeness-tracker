import { useContext } from "react";
import { LiaExchangeAltSolid } from "react-icons/lia";

import { ExpenseContext } from "../context/ExpenseContext";
import { CurrencyContext } from "../context/CurrencyConverterContext";

import { currencyConfig } from "../config/currencyConfig";

import { currency_arr } from "../constants/constant";

const CurrencyConverter = () => {
  const {
    baseCurrency,
    targetCurrency,
    setTargetCurrency,
    rate,
    loading,
    error,
  } = useContext(CurrencyContext);

  const { expenses } = useContext(ExpenseContext);

  const currencySymbol = currencyConfig[targetCurrency]?.symbol;

  const totalExpenses = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

  const convertedTotal = totalExpenses * rate;

  return (
    <section
      id="converter"
      className="shadow-md p-4 border border-gray-300 rounded-xl space-y-4"
    >
      {/* heading + logo */}
      <div className="flex flex-row justify-start items-center space-x-4">
        {loading ? (
          <>
            {/* icon skeleton */}
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />

            <div className="space-y-2">
              {/* heading skeleton */}
              <div className="h-5 w-40 rounded bg-gray-200 animate-pulse" />

              {/* subtitle skeleton */}
              <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
            </div>
          </>
        ) : (
          <>
            <div className="h-8 w-8 rounded-full bg-emerald-600 hover:bg-emerald-700 flex justify-center items-center">
              <LiaExchangeAltSolid size={20} color="#ffffff" />
            </div>

            <div>
              <h2 className="text-lg font-semibold">Currency Converter</h2>

              <p className="text-xs text-gray-400">
                Lives rates via Frankfurter API
              </p>
            </div>
          </>
        )}
      </div>

      {/* currency fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* from field */}
        <div className="grid grid-cols-1 gap-2">
          {loading ? (
            <>
              <div className="h-4 w-12 rounded bg-gray-200 animate-pulse" />

              <div className="h-11 w-full rounded-2xl bg-gray-200 animate-pulse" />
            </>
          ) : (
            <>
              <label name="from">From</label>

              <div className="bg-emerald-50 border border-gray-200 rounded-2xl p-2 text-sm font-semibold">
                {baseCurrency} — ₹ {totalExpenses.toFixed(2)}
              </div>
            </>
          )}
        </div>

        {/* to field */}
        <div className="grid grid-cols-1 gap-2">
          {loading ? (
            <>
              <div className="h-4 w-8 rounded bg-gray-200 animate-pulse" />

              <div className="h-11 w-full rounded-xl bg-gray-200 animate-pulse" />
            </>
          ) : (
            <>
              <label name="category">To</label>

              <select
                name="category"
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="caret-transparent text-base font-semibold text-gray-800 border border-gray-300 p-2 rounded-xl"
              >
                <option value="">Select Category</option>

                {currency_arr.map((c) => (
                  <option key={c.id} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>

      {/* result box */}
      <div className="bg-emerald-50 border border-gray-300 p-4 rounded-2xl">
        {loading ? (
          <div className="space-y-3">
            {/* title skeleton */}
            <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />

            {/* amount skeleton */}
            <div className="h-8 w-40 rounded bg-gray-200 animate-pulse" />

            {/* rate skeleton */}
            <div className="h-3 w-52 rounded bg-gray-200 animate-pulse" />
          </div>
        ) : error ? (
          <p className="text-red-500 font-medium">{error}</p>
        ) : (
          <div>
            <p className="uppercase text-xs tracking-wide text-gray-600">
              Converted Total
            </p>

            <h2 className="text-2xl font-bold">
              <span>{currencySymbol}</span>

              {convertedTotal.toFixed(2)}
            </h2>

            <p className="text-gray-700 text-xs">
              {currencySymbol} 1 {baseCurrency} = {rate.toFixed(4)}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrencyConverter;
