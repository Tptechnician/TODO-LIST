import './TodoConteiner.scss';
import TodoItem from '../TodoItem/TodoItem';
import todo from '../../Store/TodoStore';
import { observer } from 'mobx-react-lite';

interface TodoConteinerProps {
  onTogglePopup: () => void;
  loginOut: () => void;
}

const TodoConteiner = observer(({ onTogglePopup, loginOut }: TodoConteinerProps) => {
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
      <button className="todo__login-out" type="button" onClick={loginOut}>
        Выйти из аккаунта
      </button>
    </main>
  );
});

export default TodoConteiner;
