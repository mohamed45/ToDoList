import { useState ,React} from "react";

import  "./App.css";

function NewToDoForm() {

    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        // setTodos((curentTodos) => 
        // {
        //   return [
        //     ...curentTodos,
        //     { id: crypto.randomUUID(), title: newItem, completed: false },
        //   ];
        // });
        setNewItem("")
      }
  return( <>
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
  </>);
}
export default NewToDoForm;
