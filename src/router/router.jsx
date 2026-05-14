import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

import ExpenseForm from "../components/ExpenseForm";

import Layout from "../components/Layout";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/add-expense",
        element: (
          <>
            <Dashboard /> <ExpenseForm />
          </>
        ),
      },
    ],
  },
]);

export default router;
