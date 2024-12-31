import { useContext, useState, useEffect } from "react";
import { SplashScreen } from "./Components";
import { TaskFeed } from "./Pages/Feed/TaskFeed";
import { TaskContext } from "./ContextProvider";
import { useAuth } from "./useAuth";
import "./App.css";

function App() {
  const { tasks } = useContext(TaskContext);
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      {isAuthenticated ? <TaskFeed tasks={tasks} /> : <SplashScreen />}
    </div>
  );
}

export default App;
