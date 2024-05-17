// src/components/Task.js
import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
    const taskStyle = {
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? 'lightgray' : 'black'
      };
  return (
    <li>
      <span  style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
        <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
        />
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;