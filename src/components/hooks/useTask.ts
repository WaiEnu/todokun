import { useState } from "react";
import { type Task } from "../types/task";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");


  
  const jotai = [
      { id:0, text: "トドくんはマインドフルネスに目覚めている"},
      { id:1, text: "トドくんはだらだらしている"},
      { id:2, text: "トドくんは曲芸をしている"},
      { id:3, text: "トドくんは泳いでいる"},
      { id:4, text: "トドくんは寝ている"},
      { id:5, text: "トドくんは筋トレをしている"},
      { id:6, text: "トドくんは勉強をしている"},
      { id:7, text: "トドくんは人生という道に迷った"},
  ]

  const generateRondom = () => {
      const id = Math.random() * (jotai.length - 1);
      const j = jotai[Math.floor(id)];
      return j.text;
  }
  const [todokun, setTodokun] = useState(generateRondom());
  const generateId = () => {
      setTodokun(generateRondom());
  };

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

  return { tasks, setTasks, newTask, setNewTask, addTask, removeTask, todokun, setTodokun, jotai, generateId  };
};
