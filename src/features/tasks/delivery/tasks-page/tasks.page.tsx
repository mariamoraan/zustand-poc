import { bind } from "../../../../core/styles/bind";
import { useTasksStore } from "../store/tasks-store";
import { TaskInput } from "../task-input/task-input.component";
import { TaskList } from "../tasks-list/tasks-list.component";
import styles from "./tasks.module.css";
const cx = bind(styles);

export const TasksPage = () => {
  const { tasks } = useTasksStore();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("head")}>
        <h1 className={cx("title")}>To Do</h1>
      </div>
      <TaskList tasks={tasks.sort((task) => (task.isDone ? 1 : -1))} />
      <TaskInput />
    </div>
  );
};
