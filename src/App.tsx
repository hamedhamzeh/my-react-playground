import { useReducer } from "react";
import LoginStatus from "./components/state-management/LoginStatus";
import TaskList from "./components/state-management/TaskList";
import taskReducer from "./components/state-management/reducers/taskReducer";
import TasksContext from "./components/state-management/contexts/tasksContex";
import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            <NavBar />
            <HomePage />
        </TasksContext.Provider>
    );
}

export default App;
