//useContext
interface TodokunContextType {
  todokun: Todokun[];
  setTodokun: (todokun: Todokun) => void;
  generateTodokun: () => Todokun;
}

const TodoContext = createContext<TodokunContextType | undefined>(undefined);

