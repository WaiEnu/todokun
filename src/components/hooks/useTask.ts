import { useState } from "react";
import { type Task } from "../types/task";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      generateId();
      console.log(todokun);
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const removeTask = (id: number) => {
    generateId();
    console.log(todokun);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, setTasks, newTask, setNewTask, addTask, removeTask };
};
