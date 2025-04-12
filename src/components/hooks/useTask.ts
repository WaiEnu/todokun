import { useState } from "react";
import { generateTodokun } from "../context/useTodokun";
import { type Task } from "../types/task";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      generateTodokun();
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const removeTask = (id: number) => {
    generateTodokun();
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, setTasks, newTask, setNewTask, addTask, removeTask };
};
