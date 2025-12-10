import { createContext } from "react";
import { inicialTaskState } from "./inicialTaskState"
import type { TaskStateModel } from "../../models/TaskStateModel";

type TaskContextProps= {
  state: TaskStateModel,
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const inicialContextValue = {state: inicialTaskState,
  setState: () => {},}

  export const TaskContext = createContext<TaskContextProps>
(inicialContextValue);