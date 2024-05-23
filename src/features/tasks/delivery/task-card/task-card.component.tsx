import { DoneIcon } from "../../../../core/icons";
import { bind } from "../../../../core/styles/bind";
import { Task } from "../../domain/task";
import { useTasksStore } from "../store/tasks-store";
import styles from "./task-card.module.css";
const cx = bind(styles);

interface Props {
  task: Task;
}

export const TaskCard = (props: Props) => {
  const { task } = props;
  const { toggleTask } = useTasksStore();
  return (
    <div className={cx("wrapper")}>
      <DoneIcon
        onClick={() => toggleTask(task.id)}
        className={
          task.isDone
            ? cx(["check", "completed"])
            : cx(["check", "uncompleted"])
        }
      />
      {task.title}
    </div>
  );
};
