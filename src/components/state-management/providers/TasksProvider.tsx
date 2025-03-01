import { ReactNode, useReducer } from "react";
import taskReducer from "../reducers/taskReducer";
import TasksContext from "../contexts/tasksContex";

interface Props {
    children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
    const [tasks, tasksDispatch] = useReducer(taskReducer, []);

    return <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>{children}</TasksContext.Provider>;
};

export default TasksProvider;
