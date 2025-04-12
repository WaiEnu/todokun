import { useTask } from "../hooks/useTodokun";
import { useState } from "react";

const TodoKun: React.FC = () => {
  const { todokun, generateId } = useTask();

  return (
    <div>
      <div>
        <img src={todokun.image} width="150" height="150" alt="todokun" />
      </div>
      <div>{todokun.text}</div>
      <button onClick={generateId}>トドくん</button>
    </div>
  );
};

export default TodoKun;