import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskReducer";
import React from "react";

interface TasksCnetexType {
    tasks: Task[];
    dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksCnetexType>({} as TasksCnetexType);

export default TasksContext;
