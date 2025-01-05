import React, { useState } from "react";
import "./ToDoList.css"; // Adjust or create your CSS for styling

const Checklist = () => { //functional component that renders the checklist and its behavio
  const [tasks, setTasks] = useState([]); //An array to store the list of tasks. Each task is an object with id, text, and completed properties.
  const [newTask, setNewTask] = useState(""); // State to track the input field

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      return; // Do nothing if the input is empty or whitespace
    } else {
      const newTaskObj = {
        id: Date.now(), // Unique ID using the current timestamp
        text: newTask,
        completed: false,
      };
      const updatedTasks = [...tasks, newTaskObj];
      setTasks(updatedTasks);
      setNewTask(""); // Clear the input field
    }
  };
  // New delete function
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id); // Remove task with matching id
    setTasks(updatedTasks);
  };

  const handleToggle = (id) => { //Toggles the completed status of a task when its checkbox is clicked.
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: task.id, text: task.text, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="ToDo-container">
      <h3>To-Do List</h3>
      
      {/* Input Field and Add Button */}
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Checklist */}
      <ul className="checklist">
        {tasks.map((task) => {
          if (task.completed) {
            return (
              <li key={task.id} className="completed">
                <label>
                  <input 
                    type="checkbox"
                    checked
                    onChange={() => handleToggle(task.id)}
                  />
                  {task.text}
                  </label>
                {/* Delete Button */}
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </li>
            );
          } else {
            return (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleToggle(task.id)}
                  />
                  {task.text}
                  </label>
                {/* Delete Button */}
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Checklist;
