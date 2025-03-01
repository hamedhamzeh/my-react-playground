import { useReducer } from "react";
import taskReducer from "./components/state-management/reducers/taskReducer";
import TasksContext from "./components/state-management/contexts/tasksContex";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";

import AuthProvider from "./components/state-management/providers/AuthProvider";

function App() {
    const [tasks, tasksDispatch] = useReducer(taskReducer, []);

    return (
        <AuthProvider>
            <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
                <NavBar />
                <HomePage />
            </TasksContext.Provider>
        </AuthProvider>
    );
}

export default App;
