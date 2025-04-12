import { jotai} from "../types/jotai";
import { useTask } from "../hooks/useTodokun";
import { useId } from "../context/useTodokun";
import { useState } from "react";

const TodoKun: React.FC = () => {
  const { todokun, setTodokun } = useTask();
  const { id, generateId } = useId();
  const generateTodokun = () =>{
    const newId = generateId();
    setTodokun(jotai[newId])
  }
  useEffect(() => {
    console.log(id)
    setTodokun(jotai[id])
  },[id])

  return (
    <div>
      <div>
        <img src={todokun.image} width="150" height="150" alt="todokun" />
      </div>
      <div>{todokun.text}</div>
      <button onClick={generateTodokun}>トドくん</button>
    </div>
  );
};

export default TodoKun;