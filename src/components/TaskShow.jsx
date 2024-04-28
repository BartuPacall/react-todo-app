import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updateDesc) => {
    setShowEdit(false);
    // onUpdate(id, updatedTitle, updateDesc);
    editTaskById(id, updatedTitle, updateDesc);
  };

  console.log(task);
  return (
    <div className="task-box">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title">Task Title</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Task Description</h3>
          <p>{task.taskDesc}</p>

          <div>
            <button className="upgrade" onClick={handleEditClick}>
              Upgrade
            </button>
            <button className="delete" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
