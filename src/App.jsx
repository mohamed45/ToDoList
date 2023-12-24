import { useState } from "react";

import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {}

  return (
    <>
      <div className="main-conatiner">
        <div className="content">
          <div className="top-nav">
            <h1>TODO</h1>
            <img src="src/assets/images/Combined-Shape.svg" alt="" />
          </div>
          <div className="form-style">
            <form onSubmit={handleSubmit}>
              
                <label htmlFor="item">Add To Your ToDoList</label>
                <input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  type="text"
                  id="item"
                />
              
            </form>
          </div>
          <div className="itemList">
            <ul>
              <li>learn javascript</li>
              <li>learn javascript</li>

            </ul>
          </div>

          <div>fotter</div>
        </div>
      </div>
    </>
  );
}

export default App;
