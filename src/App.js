import { useContext, useState, useEffect } from "react";
import { SplashScreen } from "./Components";
import { TaskFeed } from "./Pages/Feed/TaskFeed";
import { TaskContext } from "./ContextProvider";
import { useAuth } from "./useAuth";
import "./App.css";

function App() {
  const { tasks, filteredTasks } = useContext(TaskContext);
  const { isAuthenticated } = useAuth();

  // check for cache hit
  const taskData = filteredTasks || tasks;

  return (
    <div className="App">
      {isAuthenticated ? <TaskFeed tasks={taskData} /> : <SplashScreen />}
    </div>
  );
}

export default App;
