import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { editTaskById, createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // refresh olmasını engelledik

    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {""}
      {taskFormUpdate ? (
        <div className="task-update">
          <h3 className="task-labell">Edit Task</h3>
          <form className="taskForm">
            <label className="task-label">Edit Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Description</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-textarea"
              rows={5}
            />
            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              Edit Task
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3 className="task-labell">Please add tasks!</h3>
          <form className="taskForm">
            <label className="task-label">Task Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-textarea"
              rows={5}
            />
            <button onClick={handleSubmit} className="task-button">
              Task Create
            </button>
          </form>
        </div>
      )}
      {""}
    </div>
  );
}

export default TaskCreate;
