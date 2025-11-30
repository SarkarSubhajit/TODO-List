import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function ListComponent() {
  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState({ item: null, id: null });

  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  function addTaskHandler(taskObject) {
    fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(taskObject),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks((prevTasks) => [...prevTasks, newTask]));
  }

  function deleteTaskHandler(id) {
    fetch(`http://localhost:5000/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));

      if (editedTask.id === id) {
        clearEdit();
      }
    });
  }

  function editTaskHandler(id) {
    const item = tasks.find((it) => it.id === id);
    setEditedTask({ item, id });
  }

  function updateTaskHandler(updatedTask) {
    fetch(`http://localhost:5000/api/todos/${editedTask.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((updated) => {
        setTasks((prevTasks) =>
          prevTasks.map((it) => (it.id === updated.id ? updated : it))
        );
        clearEdit();
      });
  }

  function clearEdit() {
    setEditedTask({ item: null, id: null });
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
