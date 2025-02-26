import PostList from "./components/react-query/PostList";
import TodoForm from "./components/react-query/TodoForm";
import TodoList from "./components/react-query/TodoList";

function App() {
    return (
        <div className="container">
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default App;
