import todo from '../../Store/TodoStore';
import './TodoItem.scss';

interface TodoItemProps {
  _id: string;
  title: string;
  made: boolean;
  autor: string;
}

const TodoItem = ({ title, made, _id, autor }: TodoItemProps) => {
  return (
    <li className="todoItem">
      <div className="todoItem__wraper">
        <input
          className="todoItem__checkbox"
          type="checkbox"
          checked={made}
          onChange={() => {
            todo.completedTodo(_id, made, title, autor);
          }}
        />
        <h2 className="todoItem__title">{title}</h2>
      </div>
      <div className="todoItem__buttons">
        <button
          className="todoItem__deleteButton"
          onClick={() => {
            todo.removeTodo(_id);
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
