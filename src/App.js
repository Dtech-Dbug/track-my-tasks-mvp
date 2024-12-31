import {useContext} from 'react'
import { SplashScreen } from './Components';
import { TaskFeed } from './Pages/Feed/TaskFeed';
import { TaskContext } from './ContextProvider';
import './App.css';


function App() {
  const {tasks} = useContext(TaskContext)
  return <div className="App">{false ? <SplashScreen /> : <TaskFeed tasks={tasks} />}</div>;
}

export default App;
