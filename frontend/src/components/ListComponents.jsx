import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ListComponent() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({ item: null, index: null });

  function addTaskHandler(taskObject) {
    setTasks((prevTasks) => [...prevTasks, taskObject]);
  }

  function deleteTaskHandler(indexToDelete) {
    setTasks((prevTasks) =>
      prevTasks.filter((task, index) => index !== indexToDelete)
    );

    if (editedTask.index === indexToDelete) {
      clearEdit();
    }
  }

  function editTaskHandler(indexToEdit) {
    setEditedTask({ item: tasks[indexToEdit], index: indexToEdit });
  }

  function updateTaskHandler(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === editedTask.index ? updatedTask : task
      )
    );
  }

  function clearEdit() {
    setEditedTask({ item: null, index: null });
  }

  return (
    <>
      <TodoForm
        onAddTask={addTaskHandler}
        onUpdateTask={updateTaskHandler}
        editTask={editedTask}
        clearEdit={clearEdit}
      />
      <TodoList
        items={tasks}
        onDeleteTask={deleteTaskHandler}
        onEditTask={editTaskHandler}
      />
    </>
  );
}
