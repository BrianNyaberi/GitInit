/**
 * Created_by: Brian Nyaberi
 * Created_date: 11-Jan-2023
 * About: Frontend react ToDo app
 * Last Modified_by: 
 */

import ToDo from "./components/ToDo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Add ToDos..."></input>
          <div className="add">Add</div>
        </div>
        <div className="list">
          <ToDo text="Hi" />
        </div>
      </div>
    </div>
  );
}

export default App;
