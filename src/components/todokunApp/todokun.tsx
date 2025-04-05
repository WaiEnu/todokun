import { useTask } from "../hooks/useTask";
import { useEffect, useState } from "react";

const TodoKun: React.FC = () => {
  const { todokun, generateId } = useTask();
  const [message, setMasseage] = useState(todokun);
  useEffect(() => {
    setMasseage(todokun);
    console.log(todokun,"app");
  }, [todokun]);
  return (
    <div>
      <div>{message}</div>
      <button onClick={generateId}>トドくん</button>
    </div>
  );
};

export default TodoKun;