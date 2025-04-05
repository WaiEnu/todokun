import ToDo from '../todoApp/todoList';
import Todokun from '../todokunApp/todokun';

const Page: React.FC = () => {
  return (
    <div>
    <Todokun />
    <ToDo />
    </div>
  );
};

export default Page;