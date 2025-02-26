import { useQuery } from "@tanstack/react-query";
import { Todo } from "../services/todoService";
import todoService from "../services/todoService";

const useTodos = () => {
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: todoService.getAll,
        staleTime: 10 * 1000 //10 sec
    });
};

export default useTodos;
