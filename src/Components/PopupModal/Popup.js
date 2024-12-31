import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import { TaskContext } from "../../ContextProvider";
import "./Popup.css";

export const PopupComponent = ({ open, onClose, title, currentTask, onSubmit }) => {
  const { addTask, tasks} = useContext(TaskContext)
  const [taskData, setTaskData] = useState({
    id: currentTask?.id || 1,
    title: currentTask?.id || currentTask?.title,
    description: currentTask?.description || "",
    severity: currentTask?.severity || "low",
    deadline: currentTask?.deadline || "",
    status: currentTask?.status || "pending"
  });
  console.log('tasks in popup', tasks)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({ taskData });
    addTask(taskData)
    // onSubmit(taskData);
    onClose();
  };

  const isEdit = title.includes('Edit')

  return (
    <Popup open={open} onClose={onClose} modal>
      <div className="Popup-Container">
        <header className="Popup-Header">
          <h2>{title}</h2>
          <button className="Close-Button" onClick={onClose}>
            &times;
          </button>
        </header>
        <form className="Task-Form" onSubmit={handleFormSubmit}>
          <label className="Task-Label">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            className="Task-Input"
            value={taskData.title}
            onChange={handleChange}
          />

          <label className="Task-Label">Description</label>
          <textarea
            name="description"
            placeholder="Enter task description"
            className="Task-Textarea"
            value={taskData.description}
            onChange={handleChange}
          ></textarea>

          <div className="Task-Row">
            <div className="Task-Column">
              <label className="Task-Label">Severity</label>
              <select
                name="severity"
                className="Task-Select"
                value={taskData.severity}
                onChange={handleChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="Task-Column">
              <label className="Task-Label">Deadline</label>
              <input
                type="datetime-local"
                name="deadline"
                className="Task-DatePicker"
                value={taskData.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="Submit-Button">
            {currentTask ? "Update Task" :isEdit ? "Edit Task" : "Add Task"}
          </button>
        </form>
      </div>
    </Popup>
  );
};

