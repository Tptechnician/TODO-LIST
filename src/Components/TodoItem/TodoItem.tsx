export default function TodoItem() {
  return (
    <div className="todoItem">
      <input type="checkbox" className="" />
      <h2>Задача1</h2>
      <button className="todoItem__editButton">Редактировать</button>
      <button className="todoItem__deleteButton">Удалить</button>
    </div>
  );
}
