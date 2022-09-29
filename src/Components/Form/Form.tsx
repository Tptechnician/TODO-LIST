import { useState } from 'react';

interface formProps {
  addTodoItem: (item: any) => void;
}

export default function Form({ addTodoItem }: formProps) {
  const [value, setValue] = useState<any>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValue({ [name]: value });
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    addTodoItem(value);
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
