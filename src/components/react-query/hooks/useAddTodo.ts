import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import todoService, { Todo } from "../services/todoService";

interface AddTodoContex {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContex>({
        mutationFn: (todo: Todo) => axios.post<Todo>("/todos", todo).then((res) => res.data),

        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

            queryClient.setQueryData<Todo[]>(["todos"], (todos = []) => [newTodo, ...todos]);

            onAdd();

            return { previousTodos };
        },

        onSuccess: (savedTodo: Todo, newTodo: Todo) => {
            queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
                todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
            );
        },

        onError: (error, newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData<Todo[]>(["todos"], context.previousTodos);
        }
    });
};

export default useAddTodo;
