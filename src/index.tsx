import React from "react";
import ReactDOM from "react-dom/client";
import "./core/styles/globals.css";
import "./core/i18n/i18n";
import { TasksPage } from "./features/tasks/delivery/tasks-page/tasks.page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TasksPage />
  </React.StrictMode>
);
