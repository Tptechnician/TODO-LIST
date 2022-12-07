import './TodoConteiner.scss';
import TodoItem from '../TodoItem/TodoItem';
import todo from '../../Store/TodoStore';
import { observer } from 'mobx-react-lite';

const TodoConteiner = observer(() => {
  return (
    <main className="todo">
      <ul className="todo__conteiner">
        {todo.todoStore.map((task) => (
          <TodoItem key={task.id} title={task.title} made={task.made} _id={task.id} />
        ))}
      </ul>
    </main>
  );
});

export default TodoConteiner;
