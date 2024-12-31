import React, { useState, useContext } from 'react';
import { PopupComponent } from '../../Components';
import { TaskContext } from '../../ContextProvider';
import { TaskCard, Loader, TaskFilter } from '../../Components';
import './TaskFeed.css';

export const TaskFeed = ({ tasks }) => {
  const { loading, setTaskFilter, filteredTasks } = useContext(TaskContext)
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  console.log("tasks in my taskfeed Cmp, ", tasks);

  const openAddTaskPopup = () => {
    setPopupTitle('Add New Task');
    setCurrentTask(null);
    setPopupOpen(true);
  };

  const openEditTaskPopup = (task) => {
    setPopupTitle('Edit Task');
    setCurrentTask(task);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="Task-Feed-Container">
      <header className="Task-Feed-Header">
        <h1>What's on your list?</h1>
      </header>

      <main className="Task-Feed-Content">
        {tasks.length > 0 ? (
          <div className="Task-Cards">
            <TaskFilter setTaskFilter={setTaskFilter} />
            <hr/>
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => {}}
                onToggleComplete={() => {}}
              />
            ))}
          </div>
        ) : (
          <div className="No-Tasks">No tasks yet</div>
        )}
      </main>
      <button className="Add-Task-Button" onClick={openAddTaskPopup}>
        +
      </button>

      {/* POPUP  */}
      <PopupComponent
        open={popupOpen}
        onClose={closePopup}
        title={popupTitle}
      ></PopupComponent>
    </div>
  );
};
