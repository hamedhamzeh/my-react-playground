import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";
import { TaskProvider } from "./components/state-management/tasks";
import Counter from "./components/state-management/counter/Counter";

function App() {
    return (
        <TaskProvider>
            <Counter />
            <NavBar />
            <HomePage />
        </TaskProvider>
    );
}

export default App;
