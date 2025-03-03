import NavBar from "./components/state-management/NavBar";
import { TaskProvider } from "./components/state-management/tasks";
import Counter from "./components/state-management/counter/Counter";

function App() {
    return (
        <TaskProvider>
            <Counter />
            <NavBar />
        </TaskProvider>
    );
}

export default App;
