import { useState } from "react";

import "./App.css";

export function NewToDoForm(props) {
  props.onSubmit;
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    props.onSubmit(newItem);
    setNewItem("");
  }

  return (
    <div className="form-style">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add To Your ToDo List"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </form>
    </div>
  );
}
