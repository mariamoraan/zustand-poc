import { bind } from "../../../../core/styles/bind";
import { Task } from "../../domain/task";
import { TaskCard } from "../task-card/task-card.component";
import styles from "./tasks-list.module.css";
const cx = bind(styles);

interface Props {
  tasks: Task[];
}

export const TaskList = (props: Props) => {
  const { tasks } = props;
  return (
    <div className={cx("wrapper")}>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};
