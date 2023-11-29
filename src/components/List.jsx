import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuidv4 } from "uuid";

function List() {
  const initialTasks = [
      {
        title: "Wake up",
      },
    {
      title: "Survive",
    },
    {
      title: "Back to sleep",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const clearTasks = () => {
    // Clear
    setTasks([]);
  };

const resetTasks = ()=>{
  setTasks(initialTasks)
}

  const deleteTask = (i) => {
    //Delete Task
    const remainingTasks = tasks.filter((task, j) => i !== j);
    setTasks(remainingTasks);
  };

  const printTasks = () => {
    return tasks.map((task, i) => (
      <Task key={uuidv4()} title={task.title} deleteTask={() => deleteTask(i)} />
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = e.target.title.value;

    e.target.title.value="";
    setTasks([...tasks, newTask]);

    if (input="") {
      return button.style(hidden)
    }
  };
  return (
    <>
      <article>
        <h1>TASKS FOR TODAY</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="ADD"></input>
          <button type="submit">Add</button>
        </form>
        <button onClick={clearTasks}>Clear</button>
        <button onClick={resetTasks}>Reset</button>
      </article>
      <section>{printTasks()}</section>
    </>
  );
}

export default List;
