import todo from '../../Store/TodoStore';

interface TodoItemProps {
  _id: string;
  title: string;
  made: boolean;
}

const TodoItem = ({ title, made, _id }: TodoItemProps) => {
  function taskCompleted() {}
  return (
    <li className="todoItem">
      <div className="todoItem__wraper">
        <input
          className="todoItem__checkbox"
          type="checkbox"
          checked={made}
          onChange={taskCompleted}
        />
        <h2 className="todoItem__title">{title}</h2>
      </div>
      <div className="todoItem__buttons">
        <button className="todoItem__editButton"></button>
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
