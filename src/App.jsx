import { useEffect, useState } from "react";

import "./App.css";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const [list, setList] = useState([]);

  const [menuColor, setMenuColor] = useState({
    all: "blue",
    active: "#9495A5",
    completed: "#9495A5",
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    setList(todos);
    console.log(todos);
  }, [todos]);

  function addToDo(title) {
    setTodos((curentTodos) => {
      return [
        ...curentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function handleDeleteTodo(id) {
    setTodos((curentTodos) => {
      return curentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleToggleTodo(id, completed) {
    const newTodos = [...todos];
    const newNew = newTodos.map((item) => {
      if (item.id == id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newNew);
  }

  // function handleToggleTodo(id, completed) {
  //   setTodos((curentTodos) => {
  //     return curentTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed };
  //       }
  //       return todo;
  //     });
  //   });
  //   const newTodos=[...todos];

  // }

  function handleShowAll() {
    setList(todos);
    setMenuColor({ all: "blue", active: "#9495A5", completed: "#9495A5" });
  }
  function handleShowActive() {
    setList(todos.filter((x) => x.completed == false));
    setMenuColor({ all: "#9495A5", active: "blue", completed: "#9495A5" });
  }

  function handleShowCompleted() {
    setList(todos.filter((x) => x.completed == true));
    setMenuColor({ all: "#9495A5", active: "#9495A5", completed: "blue" });
  }
  function handleClear() {
    setTodos(todos.filter((x) => x.completed == false));
    setMenuColor({ all: "blue", active: "#9495A5", completed: "#9495A5" });
  }

  return (
    <>
      <div className="main-conatiner">
        <div className="content">
          <div className="top-nav">
            <h1>TODO</h1>
            <img src="src/assets/images/Combined-Shape.svg" alt="" />
          </div>

          <NewToDoForm onSubmit={addToDo} />

          <div className="itemList">
            <ToDoList
              todos={list}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
            />
            <div className="footer">
              <span>
                {todos.filter((x) => x.completed == false).length} items Left
              </span>
              <div className="center-footer">
                <span onClick={handleShowAll} style={{ color: menuColor.all }}>
                  All
                </span>
                <span
                  onClick={handleShowActive}
                  style={{ color: menuColor.active }}
                >
                  Active
                </span>
                <span
                  onClick={handleShowCompleted}
                  style={{ color: menuColor.completed }}
                >
                  Completed
                </span>
              </div>
              <span onClick={handleClear}>Clear Complated</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
