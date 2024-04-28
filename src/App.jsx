import "./App.css";
import TaskList from "./components/TaskList";
import TaskCreate from "./components/TaskCreate";
import { useEffect, useContext } from "react";
import TasksContext from "./context/task";
import "./styles/responsive.css";

function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>My Tasks</h1>
      <TaskList />
    </div>
  );
}

export default App;
