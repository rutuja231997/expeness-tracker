import { useContext } from "react";
import CurrencyConverter from "../components/CurrencyConverter";

import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";

import { CurrencyContext } from "../context/CurrencyConverterContext";

const Dashboard = () => {
  const { loading } = useContext(CurrencyContext);

  return (
    <div className="p-20 w-full min-h-screen grid grid-cols-1 gap-10">
      {/* heading section */}
      <div className="space-y-3">
        {loading ? (
          <>
            {/* heading skeleton */}
            <div className="h-8 w-48 rounded bg-gray-200 animate-pulse" />

            {/* subheading skeleton */}
            <div className="h-5 w-96 rounded bg-gray-200 animate-pulse" />
          </>
        ) : (
          <>
            <h2 className="text-2xl text-gray-900 font-bold">Dashboard</h2>

            <p className="text-gray-600 text-base lg:text-lg">
              An overview of your spending across categories.
            </p>
          </>
        )}
      </div>

      {/* summary cards */}
      <SummaryCard />

      {/* converter + expense list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <CurrencyConverter className="w-full md:col-span-1" />

        <ExpenseList className="w-full md:col-span-2" />
      </div>
    </div>
  );
};

export default Dashboard;
