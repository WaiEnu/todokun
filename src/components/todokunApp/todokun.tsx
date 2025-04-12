import { useStore } from '@nanostores/react'
import { todokun, generateTodokun } from "../context/useTodokun";

const TodoKun: React.FC = () => {
  const $todokun = useStore(todokun)
  return (
    <div>
      <div>
        <img src={$todokun.image} width="150" height="150" alt="todokun" />
      </div>
      <div>{$todokun.text}</div>
      <button onClick={generateTodokun}>トドくん</button>
    </div>
  );
};

export default TodoKun;