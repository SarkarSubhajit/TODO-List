export default function TodoList({ items, onDeleteTask, onEditTask }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center p-4 bg-white rounded-2xl shadow-md hover:-translate-y-1
 hover:shadow-lg transition-all duration-300 border border-gray-200"
        >
          <div>
            <p className="text-lg font-semibold text-gray-800">{item.task}</p>
            <p className="text-sm text-gray-500">{item.dueDate}</p>
          </div>

          <span
            className={
              "px-3 py-1 rounded-full text-xs font-semibold shadow " +
              (item.status === "Pending"
                ? "bg-gray-300 text-gray-700"
                : item.status === "In-Progress"
                ? "bg-yellow-400 text-white"
                : "bg-green-500 text-white")
            }
          >
            {item.status}
          </span>

          <div className="flex gap-2">
            <button
              className="px-4 py-1 rounded-lg bg-yellow-500 text-white text-sm shadow hover:bg-yellow-600 active:scale-95 transition"
              onClick={() => onEditTask(item.id)}
            >
              Edit
            </button>

            <button
              className="px-4 py-1 rounded-lg bg-red-500 text-white text-sm shadow hover:bg-red-600 active:scale-95 transition"
              onClick={() => onDeleteTask(item.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
