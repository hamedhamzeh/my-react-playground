import { useReducer } from "react";
import LoginStatus from "./components/state-management/LoginStatus";
import TaskList from "./components/state-management/TaskList";
import taskReducer from "./components/state-management/reducers/taskReducer";
import TasksContext from "./components/state-management/contexts/tasksContex";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";
import authReducer from "./components/state-management/reducers/authReducer";
import AuthContex from "./components/state-management/contexts/authContext";

function App() {
    const [tasks, tasksDispatch] = useReducer(taskReducer, []);
    const [user, authDispatch] = useReducer(authReducer, "");

    return (
        <AuthContex.Provider value={{ user, dispatch: authDispatch }}>
            <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
                <NavBar />
                <HomePage />
            </TasksContext.Provider>
        </AuthContex.Provider>
    );
}

export default App;
