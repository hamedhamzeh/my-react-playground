import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "./LoginPage";
import ExpenseTracker from "../expense-tracker/ExpenseTracker";
import UserUI from "../other/data-fetching/components/UserUI";
import StateMangementPage from "../state-management/StateMangementPage";
import ReactQueryPage from "../react-query/ReactQueryPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <HomePage /> },
                { path: "expense-tracker", element: <ExpenseTracker /> },
                { path: "fetching-data", element: <UserUI /> },
                { path: "react-query", element: <ReactQueryPage /> },
                { path: "state-mangement", element: <StateMangementPage /> },
                { path: "login", element: <LoginPage /> },
                { path: "contact", element: <ContactPage /> },
                {
                    element: <PrivateRoutes />,
                    children: [
                        {
                            path: "users",
                            element: <UsersPage />,
                            children: [{ path: ":id", element: <UserDetail /> }]
                        }
                    ]
                }
            ]
        }
    ],
    { basename: "/my-react-playground" }
);

export default router;
