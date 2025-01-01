import React, { useState, useContext } from "react";
export const useTaskFeed = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [currentTask, setCurrentTask] = useState(null);

  const openAddTaskPopup = () => {
    setPopupTitle("Add New Task");
    setCurrentTask(null);
    setPopupOpen(true);
  };

  const openEditTaskPopup = (task) => {
    setPopupTitle("Edit Task");
    setCurrentTask(task);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleLogout = () => {
    // logout user, del auth token 
    localStorage.removeItem('authToken')
  }

  return {
    popupOpen,
    setPopupOpen,
    popupTitle,
    setPopupTitle,
    currentTask,
    setCurrentTask,

    openAddTaskPopup,
    openEditTaskPopup,
    closePopup
  };
};
