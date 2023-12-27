import "./App.css";
export function ToDoItem({
  completed,
  id,
  title,
  handleToggleTodo,
  handleDeleteTodo,
}) {
  return (
    <li className="hoverable-item">
      <div>
        <label onClick={(e) => handleToggleTodo(id, e.target.checked)}>
          {completed ? (
            <img src="./src/assets/images/checked.png" checked={completed} />
          ) : (
            <img src="./src/assets/images/unChecked.png" checked={completed} />
          )}
        </label>

        <span
          style={{
            marginLeft: "10px",
            marginRight: "10px",
            textDecoration: completed ? "line-through" : "none",
          }}
        >
          {title}
        </span>
      </div>
      <button onClick={() => handleDeleteTodo(id)} className="display-on-hover">
        Delete
      </button>
    </li>
  );
}
