export default function TodoList({ items, onDeleteTask }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.task} -- {item.dueDate}
          <button onClick={() => onDeleteTask(index)}>Delete Task</button>
        </li>
      ))}
    </ul>
  );
}
