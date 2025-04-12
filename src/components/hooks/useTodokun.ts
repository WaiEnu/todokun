import jotai from "../types/jotai"

export const useTodokun = () => {
  const generateRondomId = (length) => {
      const id = Math.random() * (length - 1);
      return Math.floor(id);
  }
  const generateRondom = () => {
      const id = generateRondomId(jotai.length);
      const j = jotai[id];
      return j;
  }
  const [todokun, setTodokun] = useState(generateRondom());
  const generateId = () => {
      setTodokun(generateRondom());
  };

  return { todokun, setTodokun, generateId  };
};