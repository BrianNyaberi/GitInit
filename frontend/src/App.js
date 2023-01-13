/**
 * Created_by: Brian Nyaberi
 * Created_date: 11-Jan-2023
 * About: Frontend react ToDo app
 * Last Modified_by: 
 */

import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo } from "./utils/HandleApi";

function App() {

  const [toDo, setToDo] = useState([])
  // const [text, setText] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos..."></input>
          <div className="add">Add</div>
        </div>
        <div className="list">
          {toDo.map((item) => <ToDo key={item._id} text={item.text} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
