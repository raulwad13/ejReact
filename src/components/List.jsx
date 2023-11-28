import React, { useState } from "react";
import Task from "./Task";
import {v4 as uuidv4} from "uuid";


function List() {
    const [tasks, setTasks] = useState([]);

    const deleteTask = (i)=>{
        //Delete Task
        const remainingTasks = tasks.filter((task, j) => i !== j);
    setTasks(remainingTasks);
    };

    
    const printTasks = () => {
        return tasks.map((title, i) => (
          <Task
            key={uuidv4()}
            title={title}
            deleteTask={() => deleteTask(i)}
          />
        ));
      };
     
    const handleSubmit = (e) => {
      e.preventDefault();
      const newTask = e.target.title.value;
  
      setTasks([...tasks, newTask])
    };
  return (
    <>
    <article>
      <h1>TASKS FOR TODAY</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" />
        <button type="submit" />
      </form>
    </article>
    <section>
        {printTasks()}
    </section>
    </>
  );

}

export default List;
