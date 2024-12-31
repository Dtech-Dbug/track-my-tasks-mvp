import React, { useContext } from "react";
import { TaskContext } from "../../ContextProvider";
import "./TaskCard.css";

export const TaskCard = ({ task }) => {
  const { deleteTask, updateTask, markTaskAsCompleted, markTaskAsPending } =
    useContext(TaskContext);
  const statusClass =
    task.status === "completed" ? "completed-status" : "pending-status";

  return (
    <div className={`Task-Card ${task.completed ? "completed" : ""}`}>
      <div className="Task-Card-Header">
        <h3 className="Task-Title">{task.title}</h3>
        <span className={`Task-Severity ${task.severity}`}>
          {task.severity}
        </span>
      </div>
      <p className="Task-Description">{task.description}</p>
      <p className="Task-Deadline">
        <strong>Deadline:</strong> {task.deadline || "No deadline set"}
      </p>
      <p className={`Task-Status ${statusClass}`}>
        <strong>Status:</strong> {task.status}
      </p>
      <div className="Task-Card-Actions">
        <button
          className="Task-Edit-Button"
          onClick={() => updateTask(task?.id)}
        >
          Edit
        </button>
        <button
          className="Task-Delete-Button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="Task-Complete-Button"
          onClick={() =>
            task.status === "completed"
              ? markTaskAsPending(task?.id)
              : markTaskAsCompleted(task?.id)
          }
        >
          {task.status === "completed"
            ? "Mark as Incomplete"
            : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};
