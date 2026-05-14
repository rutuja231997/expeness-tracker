import { useState } from "react";
import { useContext } from "react";

import { GoPlus } from "react-icons/go";

import { ExpenseContext } from "../context/ExpenseContext";

import { category_arr } from "../constants/categories";
import { useNavigate } from "react-router-dom";

import { expenseSchema } from "../schemas/expensesSchema";

const ExpenseForm = ({ className }) => {
  const navigate = useNavigate();

  const { expenses, setExpenses } = useContext(ExpenseContext);

  const [errors, setErrors] = useState({});

  const [formExpenseData, setFormExpenseData] = useState({
    title: "",
    category: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = expenseSchema.safeParse(formExpenseData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors(fieldErrors);

      return;
    }

    setErrors({});

    const newExpense = {
      id: Date.now(),

      title: formExpenseData.title,

      amount: formExpenseData.amount,

      category: formExpenseData.category,

      date: formExpenseData.date,
    };

    setExpenses([...expenses, newExpense]);

    setFormExpenseData({
      title: "",
      category: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
    });

    navigate("/dashboard");
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setFormExpenseData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className={`${className} relative w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-xl p-6 sm:p-8`}
      >
        {/* close button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center text-gray-500 transition-colors hover:bg-gray-100"
        >
          ✕
        </button>

        {/* heading */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Add Expense</h2>

          <p className="text-gray-500 mt-1">Log a new transaction in seconds</p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Title</label>

            <input
              type="text"
              placeholder="e.g. Lunch with team"
              name="title"
              value={formExpenseData.title}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
          </div>

          {/* category + amount */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* category */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Category
              </label>

              <select
                name="category"
                value={formExpenseData.category}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Category</option>

                {category_arr.map((c) => (
                  <option key={c.id} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>

              {errors.category && (
                <p className="text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            {/* amount */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Amount
              </label>

              <input
                type="number"
                name="amount"
                placeholder="0.00"
                value={formExpenseData.amount}
                onChange={handleOnChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500"
              />

              {errors.amount && (
                <p className="text-sm text-red-500">{errors.amount}</p>
              )}
            </div>
          </div>

          {/* date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Date</label>

            <input
              type="date"
              name="date"
              value={formExpenseData.date}
              onChange={handleOnChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-emerald-500"
            />

            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          {/* submit button */}
          <button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-medium transition-colors">
            <GoPlus size={20} color="#ffffff" />

            <span>Add Expense</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
