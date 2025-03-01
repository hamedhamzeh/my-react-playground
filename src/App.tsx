import { useReducer } from "react";
import taskReducer from "./components/state-management/reducers/taskReducer";
import TasksContext from "./components/state-management/contexts/tasksContex";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";

import AuthProvider from "./components/state-management/providers/AuthProvider";
import TasksProvider from "./components/state-management/providers/TasksProvider";

function App() {
    return (
        <AuthProvider>
            <TasksProvider>
                <NavBar />
                <HomePage />
            </TasksProvider>
        </AuthProvider>
    );
}

export default App;
