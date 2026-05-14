import { GiWallet } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gray-50 border-b border-gray-300">
      <div
        className="h-20 px-4
          sm:px-6
          lg:px-10

          flex
          items-center
          justify-between
        "
      >
        {/* logo */}
        <Link
          to="/"
          className="
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              h-12
              w-12

              rounded-full

              bg-emerald-600

              flex
              items-center
              justify-center
            "
          >
            <GiWallet size={24} color="#ffffff" />
          </div>

          <span
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            SpendWise
          </span>
        </Link>

        {/* desktop navigation */}
        <nav className="hidden lg:flex">
          <ul
            className="
              flex
              items-center
              gap-10

              font-medium
            "
          >
            <li>
              <Link
                to="/dashboard"
                className="
                  text-gray-600

                  transition-colors

                  hover:text-emerald-600
                "
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/add-expense"
                className="
                  text-gray-600

                  transition-colors

                  hover:text-emerald-600
                "
              >
                Add Expense
              </Link>
            </li>
            <li>
              <a
                href="#converter"
                className="
                  text-gray-600

                  transition-colors

                  hover:text-emerald-600
                "
              >
                Converter
              </a>
            </li>
            <li>
              <a
                href="#expenses-list"
                className="
                  text-gray-600

                  transition-colors

                  hover:text-emerald-600
                "
              >
                Expenses List
              </a>
            </li>
          </ul>
        </nav>

        {/* mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            lg:hidden

            h-12
            w-12

            rounded-full

            bg-emerald-600

            flex
            items-center
            justify-center

            transition-colors

            hover:bg-emerald-700
          "
        >
          <IoMenu size={24} color="#ffffff" />
        </button>
      </div>

      {/* mobile popover menu */}
      {isMenuOpen && (
        <div
          className="
            lg:hidden

            absolute
            top-full
            left-0

            w-full

            bg-white

            border-b
            border-gray-200

            shadow-lg
          "
        >
          <nav className="p-4">
            <ul
              className="
                flex
                flex-col
                gap-4
              "
            >
              <li>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block

                    rounded-xl

                    px-4
                    py-3

                    font-medium

                    text-gray-700

                    transition-colors

                    hover:bg-gray-100
                  "
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/add-expense"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block

                    rounded-xl

                    px-4
                    py-3

                    font-medium

                    text-gray-700

                    transition-colors

                    hover:bg-gray-100
                  "
                >
                  Add Expense
                </Link>
              </li>
              <li>
                <a
                  href="#converter"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block

                    rounded-xl

                    px-4
                    py-3

                    font-medium

                    text-gray-700

                    transition-colors

                    hover:bg-gray-100
                  "
                >
                  Converter
                </a>
              </li>{" "}
              <li>
                <a
                  href="#expense-list"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    block

                    rounded-xl

                    px-4
                    py-3

                    font-medium

                    text-gray-700

                    transition-colors

                    hover:bg-gray-100
                  "
                >
                  Expenses-list
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

// const Header = () => {
//   return (
//     <div className="h-18 p-2 bg-gray-50 w-full border border-gray-300 grid grid-cols-2 lg:grid-cols-2 lg:gap-0.5">
//       {/* logo + name */}
//       <div className="cursor-pointer">
//         <Link
//           to="/"
//           className="flex flex-row justify-start items-center gap-2 p-2 "
//         >
//           <div className="h-10 w-10 bg-emerald-600 flex justify-center items-center rounded-full">
//             <GiWallet size={24} color="#ffffff" />
//           </div>
//           <span className="text-lg font-bold">Expense Tracker</span>
//         </Link>
//       </div>

//       {/* navigation links */}
//       <div className="hidden lg:flex justify-evenly">
//         <ul className="font-semibold flex gap-10 justify-between items-center flex-row">
//           <li>
//             <Link
//               to="/dashboard"
//               className="cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/add-expense"
//               className="cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               Add Expense
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="#converter"
//               className="cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               Converter
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="lg:hidden flex items-center justify-end">
//         <button className="flex items-center justify-center cursor-pointer bg-emerald-600 text-white h-10 w-10 rounded-full">
//           <IoMenu size={24} color="#ffffff" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;
