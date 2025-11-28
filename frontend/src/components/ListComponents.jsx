import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ListComponent() {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(taskObject) {
    setTasks((prevTasks) => [...prevTasks, taskObject]);
  }

  function deleteTaskHandler(indexToDelete) {
    setTasks((prevTasks) =>
      prevTasks.filter((task, index) => index !== indexToDelete)
    );
  }

  return (
    <>
      <TodoForm onAddTask={addTaskHandler} />
      <TodoList items={tasks} onDeleteTask={deleteTaskHandler} />
    </>
  );
}
