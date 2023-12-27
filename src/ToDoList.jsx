import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, handleToggleTodo, handleDeleteTodo }) {
  return (
    <ul>
      {todos.length === 0 && "No ToDos"}
      {todos.map((todo) => {
        return (
          <ToDoItem
            {...todo}
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            key={todo.id}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleTodo={handleToggleTodo}
          />
        );
      })}
    </ul>
  );
}
