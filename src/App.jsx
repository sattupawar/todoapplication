import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [input, setInput] = useState("");
  let [task, setTask] = useState([]);
   let [active, setActive] = useState(true);
   let[activeIndex,setActiveIndex]=useState(-1)
  const addTask = (e) => {
    e.preventDefault();
    setTask((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTask = (index) => {
    let temp = task.filter((t, i) => i !== index);
    setTask(temp);
  };

  const editTask = (index, text) => {

    
    let temp = [...task];
    temp[index].text = text;
    setTask(temp);
  };
  return (
    <>
      <div>
        <h1>Manage Your Daily Task </h1>

        <form action="" onSubmit={(e) => e.preventDefault}>
          <input
            type="text"
            placeholder="Write  Your Tasks..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button onClick={addTask}>Add</button>
          <div>
            {task.map((task, index) => (
              <div key={task.id} className="tasks">
                {/* <h3>{task.text}</h3> */}
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => {
                    editTask(index, e.target.value);
                  }}
                  disabled={activeIndex !== index}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                     setActiveIndex(index=== activeIndex ? -1 : index);
                  }}
                >
                 {activeIndex === index ? "Save": "Edit"} 
                </button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
