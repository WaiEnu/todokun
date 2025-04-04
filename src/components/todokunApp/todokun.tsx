import { useTask } from "../hooks/useTask";

const TodoKun: React.FC = () => {
  const { todokun, generateId } = useTask();
  return (
    <div>
      <div>{todokun}</div>
      <button onClick={generateId}>トドくん</button>
    </div>
  );
};

export default TodoKun;