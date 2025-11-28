import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [task, setTask] = useState(null);
  const [dueDate, setDueDate] = useState(null);

  function submitHandler(event) {
    event.preventDefault();
    console.log("Task : " + task);

    onAddTask({ task, dueDate });
    setTask("");
    setDueDate(null);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter Task"
        name="taskField"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <br />
      <input
        type="date"
        name="dateField"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}
