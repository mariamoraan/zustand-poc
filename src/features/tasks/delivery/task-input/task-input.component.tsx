import { useState } from "react";
import styles from "./task-input.module.css";
import { bind } from "../../../../core/styles/bind";
import { useTasksStore } from "../store/tasks-store";
import { Task } from "../../domain/task";
import { uuid } from "../../../../core/uuid/uuid";
const cx = bind(styles);

export const TaskInput = () => {
  const { addTask } = useTasksStore();
  const [taskTitle, setTaskTitle] = useState("");
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(
      Task.fromPrimitives({
        id: uuid(),
        title: taskTitle,
        isDone: false,
      })
    );
  };
  return (
    <form className={cx("wrapper")} onSubmit={onSubmit}>
      <input
        className={cx("task-title-input")}
        aria-label="Task title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="What do you need to do?"
      />
    </form>
  );
};
