import { GiWallet } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useState } from "react";

import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyConverterContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { loading } = useContext(CurrencyContext);

  return (
    <header className="sticky top-0 z-40 bg-gray-50 border-b border-gray-300">
      <div className="h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          {loading ? (
            <>
              {/* logo skeleton */}
              <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />

              {/* title skeleton */}
              <div className="h-6 w-32 rounded bg-gray-200 animate-pulse" />
            </>
          ) : (
            <>
              <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center">
                <GiWallet size={24} color="#ffffff" />
              </div>

              <span className="text-xl font-bold text-gray-900">SpendWise</span>
            </>
          )}
        </Link>

        {/* desktop navigation */}
        <nav className="hidden lg:flex">
          {loading ? (
            <div className="flex items-center gap-8">
              <div className="h-5 w-24 rounded bg-gray-200 animate-pulse" />

              <div className="h-5 w-28 rounded bg-gray-200 animate-pulse" />

              <div className="h-5 w-24 rounded bg-gray-200 animate-pulse" />

              <div className="h-5 w-32 rounded bg-gray-200 animate-pulse" />
            </div>
          ) : (
            <ul className="flex items-center gap-10 font-medium">
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-600 transition-colors hover:text-emerald-600"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/add-expense"
                  className="text-gray-600 transition-colors hover:text-emerald-600"
                >
                  Add Expense
                </Link>
              </li>

              <li>
                <a
                  href="#converter"
                  className="text-gray-600 transition-colors hover:text-emerald-600"
                >
                  Converter
                </a>
              </li>

              <li>
                <a
                  href="#expenses-list"
                  className="text-gray-600 transition-colors hover:text-emerald-600"
                >
                  Expenses List
                </a>
              </li>
            </ul>
          )}
        </nav>

        {/* mobile menu button */}
        {loading ? (
          <div className="lg:hidden h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center transition-colors hover:bg-emerald-700"
          >
            <IoMenu size={24} color="#ffffff" />
          </button>
        )}
      </div>

      {/* mobile popover menu */}
      {!loading && isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <nav className="p-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/add-expense"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Add Expense
                </Link>
              </li>

              <li>
                <a
                  href="#converter"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Converter
                </a>
              </li>

              <li>
                <a
                  href="#expense-list"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                >
                  Expenses List
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
