import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";

const router = createBrowserRouter(
    [
        { path: "/", element: <HomePage /> },
        { path: "/users", element: <UserListPage /> }
    ],
    { basename: "/my-react-playground" } // Set the base URL
);

export default router;
