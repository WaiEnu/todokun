import IdProvider from "../context/useTodokun";
import ToDo from '../todoApp/todoList';
import Todokun from '../todokunApp/todokun';

const Page: React.FC = () => {
  return (
    <IdProvider>
      <Todokun />
      <ToDo />
    </IdProvider>
  );
};

export default Page;