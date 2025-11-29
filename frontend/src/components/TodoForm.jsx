import { useEffect, useState } from "react";

export default function TodoForm({
  onAddTask,
  onUpdateTask,
  editTask,
  clearEdit,
}) {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editTask.item) {
      setTask(editTask.item.task);
      setDueDate(editTask.item.dueDate);
      setStatus(editTask.item.status);
    } else {
      setTask("");
      setDueDate("");
      setStatus("Pending");
    }
  }, [editTask]);

  function submitHandler(event) {
    event.preventDefault();

    const newTask = { task, dueDate, status };

    if (editTask.item !== null) {
      onUpdateTask(newTask);
      clearEdit();
    } else {
      onAddTask(newTask);
    }

    setTask("");
    setDueDate("");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-xl transition-all"
    >
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 shadow-sm"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 shadow-sm"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-3 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 shadow-sm"
      >
        <option value="Pending">Pending</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button
        type="submit"
        className="py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
      >
        {editTask.item ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
