import React, { useState } from 'react';
import './ToDoList.css'; // Ensure this file exists for styling

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h3>To-Do List</h3>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          placeholder="Add a task"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="todo-list">
        {tasks.map((task, index) => {
          let taskClass = '';
          if (task.completed) {
            taskClass = 'completed';
          }
          return (
            <li key={index} className={taskClass}>
              <span onClick={() => toggleComplete(index)}>{task.text}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
