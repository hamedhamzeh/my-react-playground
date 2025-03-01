import Counter from "./components/state-management/Counter";
import LoginStatus from "./components/state-management/LoginStatus";
import TaskList from "./components/state-management/TaskList";

function App() {
    return (
        <div className="container">
            <LoginStatus />
            <TaskList />
        </div>
    );
}

export default App;
