import todo from '../../Store/TodoStore';
import './TodoItem.scss';

interface TodoItemProps {
  _id: string;
  title: string;
  made: boolean;
}

const TodoItem = ({ title, made, _id }: TodoItemProps) => {
  return (
    <li className="todoItem">
      <div className="todoItem__wraper">
        <input
          className="todoItem__checkbox"
          type="checkbox"
          checked={made}
          onChange={() => {
            todo.completedTodo(_id);
          }}
        />
        <h2 className="todoItem__title">{title}</h2>
      </div>
      <div className="todoItem__buttons">
        <button className="todoItem__editButton" />
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
