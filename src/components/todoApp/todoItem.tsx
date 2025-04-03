import React, { useState } from 'react';

interface Task {
    id: number;
    text: string;
}

interface TodoAppProps {
    task: Task;
    remove: (id: number) => void;
}

const TodoApp: React.FC<TodoAppProps> = ({task, remove}) => {

  const removeTask = (id: number) => {
    remove(id);
  };

  return (
    <li key={task.id}>
      {task.text} <button onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
};

export default TodoApp;