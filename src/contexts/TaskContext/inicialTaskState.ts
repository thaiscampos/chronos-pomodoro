import type { TaskStateModel } from "../../models/TaskStateModel";

export const inicialTaskState: TaskStateModel ={
  task: [],
  secondsRemaining: 0,
  formattedSecondsRemaning: '00:00',
  activeTask: null,
  currentCycle: 0,
  config:{
    workTime: 25,
    shortBreakTime:5,
    longBreakTime: 15
  },
}