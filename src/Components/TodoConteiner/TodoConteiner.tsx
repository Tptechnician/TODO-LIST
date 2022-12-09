import './TodoConteiner.scss';
import TodoItem from '../TodoItem/TodoItem';
import todo from '../../Store/TodoStore';
import { observer } from 'mobx-react-lite';

interface TodoConteinerProps {
  onTogglePopup: () => void;
}

const TodoConteiner = observer(({ onTogglePopup }: TodoConteinerProps) => {
  return (
    <main className="todo">
      <button className="todo__add-button" type="button" onClick={onTogglePopup}>
        Добавить задачу
      </button>
      <ul className="todo__conteiner">
        {todo.todoStore.map((task) => (
          <TodoItem
            key={task.id}
            title={task.title}
            made={task.made}
            _id={task.id}
            autor={task.autor}
          />
        ))}
      </ul>
    </main>
  );
});

export default TodoConteiner;
