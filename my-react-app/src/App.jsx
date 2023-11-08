import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [person, setPerson] = useState(data.data);
  const clearList = () => {
    console.log("Clearing list...");
    setPerson([]);
  };
  const clearSinglePerson = (id) => {
    setPerson(person.filter((item) => item.id !== id));
  };

  const addPerson = () => {
    setPerson([...person, { id: "5", name: "Yelena" }]);
  };
  return (
    <>
      {person.map((item) => {
        const { id, name } = item;
        return (
          <>
            <div key={id} className="item">
              <h3>{name}</h3>
            </div>
            <button onClick={() => clearSinglePerson(id)}>Reset</button>
          </>
        );
      })}
      <button onClick={clearList}>Clear</button>
      <button onClick={addPerson}>Add</button>
    </>
  );
}

export default App;
