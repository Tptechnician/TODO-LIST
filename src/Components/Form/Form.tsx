import { useState } from 'react';
import todo from '../../Store/TodoStore';

export default function Form() {
  const [value, setValue] = useState<any>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue({ [name]: value });
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    todo.addTodo(value.title);
    setValue({});
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        value={value.title || ''}
        type="text"
        placeholder="Введите задачу"
        name="title"
        onChange={handleChange}
      />
      <button className="form__button" type="submit"></button>
    </form>
  );
}
