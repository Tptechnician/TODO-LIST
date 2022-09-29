interface TodoItemProps {
  title: string;
  made: boolean;
}

export default function TodoItem({ title, made }: TodoItemProps) {
  function taskCompleted() {}
  return (
    <li className="todoItem">
      <div className="todoItem__wraper">
        <input className="todoItem__checkbox" type="checkbox" onClick={taskCompleted} />
        <h2 className="todoItem__title">{title}</h2>
      </div>
      <div className="todoItem__buttons">
        <button className="todoItem__editButton"></button>
        <button className="todoItem__deleteButton"></button>
      </div>
    </li>
  );
}
