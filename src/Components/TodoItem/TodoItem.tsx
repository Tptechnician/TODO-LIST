export default function TodoItem() {
  return (
    <div className="todoItem">
      <div className="todoItem__wraper">
        <input className="todoItem__checkbox" type="checkbox" />
        <h2 className="todoItem__title">Задача</h2>
      </div>
      <div className="todoItem__buttons">
        <button className="todoItem__editButton"></button>
        <button className="todoItem__deleteButton"></button>
      </div>
    </div>
  );
}
