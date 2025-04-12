import { useTask } from "../hooks/useTodokun";
import { useEffect, useState } from "react";

const TodoKun: React.FC = () => {
  const { todokun, generateId } = useTask();
  const [message, setMasseage] = useState(todokun.text);
  const [image, setImage] = useState(todokun.image);
  useEffect(() => {
    setMasseage(todokun.text);
    setImage(todokun.image);
    console.log(todokun,"app");
  }, [todokun]);
  return (
    <div>
      <div>
        <img src={image} width="150" height="150" alt="todokun" />
      </div>
      <div>{message}</div>
      <button onClick={generateId}>トドくん</button>
    </div>
  );
};

export default TodoKun;