import CurrencyConverter from "../components/CurrencyConverter";

import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";

const Dashboard = () => {
  return (
    <div className="p-20 w-full min-h-screen grid grid-cols-1 gap-10">
      <div className="space-y-2">
        <h2 className="text-2xl text-gray-900 font-bold">Dashboard</h2>
        <p className="text-gray-600 text-base lg:text-lg">
          An overview of your spending across categories.
        </p>
      </div>
      {/* summary card */}
      <SummaryCard />

      {/* expense List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <CurrencyConverter className={`w-full md:col-span-1`} />
        <ExpenseList className={`w-full md:col-span-2`} />
      </div>
    </div>
  );
};

export default Dashboard;
