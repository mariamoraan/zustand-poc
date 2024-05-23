import { create } from "zustand";
import { Task } from "../../domain/task";
import { TasksMother } from "../../domain/tasks.mother";

interface TasksState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
}

export const useTasksStore = create<TasksState>()((set) => ({
  tasks: [...TasksMother.tasks()],
  addTask: (newTask: Task) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
  removeTask: (id: string) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  toggleTask: (id: string) =>
    set((state) => {
      return {
        tasks: state.tasks.map((task) =>
          task.id !== id
            ? task
            : Task.fromPrimitives({
                ...task.toPrimitives(),
                isDone: !task.isDone,
              })
        ),
      };
    }),
}));
