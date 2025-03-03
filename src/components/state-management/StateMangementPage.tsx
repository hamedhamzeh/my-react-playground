import NavBar from "./NavBar";
import { TaskProvider } from "./tasks";
import TaskList from "./tasks/TaskList";

const StateMangementPage = () => {
    return (
        <TaskProvider>
            <NavBar />
            <TaskList />
        </TaskProvider>
    );
};

export default StateMangementPage;
