import { useState } from "react";
import { type Task } from "../types/task";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");


  
  const jotai = [
      { id:0, text: "トドくんはマインドフルネスに目覚めている", image: "/public/image/todokun0.PNG" },
      { id:1, text: "トドくんはだらだらしている" , image: "/public/image/todokun1.PNG"},
      { id:2, text: "トドくんは曲芸をしている", image: "/public/image/todokun2.PNG"},
      { id:3, text: "トドくんは泳いでいる", image: "/public/image/todokun3.PNG"},
      { id:4, text: "トドくんは寝ている", image: "/public/image/todokun4.PNG"},
      { id:5, text: "トドくんは筋トレをしている", image: "/public/image/todokun5.PNG"},
      { id:6, text: "トドくんは勉強をしている", image: "/public/image/todokun6.PNG"},
      { id:7, text: "トドくんは人生という道に迷った", image: "/public/image/todokun7.PNG"},
  ]

  const generateRondom = () => {
      const id = Math.random() * (jotai.length - 1);
      const j = jotai[Math.floor(id)];
      return j;
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
