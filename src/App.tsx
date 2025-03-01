import NavBar from "./components/state-management/NavBar";
import HomePage from "./components/state-management/HomePage";
import AuthProvider from "./components/state-management/auth/AuthProvider";
import { TaskProvider } from "./components/state-management/tasks";

function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <NavBar />
                <HomePage />
            </TaskProvider>
        </AuthProvider>
    );
}

export default App;
