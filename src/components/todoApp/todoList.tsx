import React, { useState } from 'react';
import TodoItem from './todoItem';
import { type Task } from "../types/task";
import { useTask } from "../hooks/useTask";

const TodoApp: React.FC = () => {
  const { tasks, newTask, setNewTask, addTask, removeTask } = useTask();
  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task:Task) => (
          <TodoItem key={task.id} task={task} remove={removeTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;