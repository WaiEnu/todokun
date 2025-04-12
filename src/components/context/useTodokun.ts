//useContext
interface TodokunContextType {
  todokun: Todokun[];
  setTodokun: (todokun: Todokun) => void;
  generateTodokun: () => Todokun;
}

const TodokunContext = createContext<TodokunContextType | undefined>(undefined);

export const TodokunProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todokun, setTodokun] = useState<Todokun>(jotai[0]);


  const value = {
    todokun,
    generateId
  };

  return <TodokunContext.Provider value={value}>{children}</TodokunContext.Provider>;
};

export const useTodokun = () => {
  const context = useContext(TodokunContext);
  if (context === undefined) {
    throw new Error("useTodokun must be used within a TodokunProvider");
  }
  return context;
};