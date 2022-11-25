import TodoItem from '../TodoItem/TodoItem';
import todo from '../../Store/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoConteiner = observer(() => {
  return (
    <ul className="TodoConteiner">
      {todo.todoStore.map((task) => (
        <TodoItem key={task._id} title={task.title} made={task.made} _id={task._id} />
      ))}
    </ul>
  );
});

export default TodoConteiner;
