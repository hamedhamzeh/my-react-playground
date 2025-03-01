import { Dispatch } from "react";
import React from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksCnetexType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksCnetexType>({} as TasksCnetexType);

export default TasksContext;
