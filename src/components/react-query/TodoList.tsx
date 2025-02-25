import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
}

const TodoList = () => {
    const fetchTodos = () => {
        return axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos").then((res) => res.data);
    };

    const { data: todos } = useQuery({
        queryKey: ["todos"], // For cashing
        queryFn: fetchTodos // Fetching the data
    });

    // if (error) return <p>{error}</p>;

    return (
        <ul className="list-group">
            {todos?.map((todo) => (
                <li key={todo.id} className="list-group-item">
                    {todo.title}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
