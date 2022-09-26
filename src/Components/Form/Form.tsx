import { useState } from 'react';

export default function Form(props: any) {
  const [value, setValue] = useState({});

  function handleChange(e: any) {
    const { name, value } = e.target;
    setValue({ [name]: value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    props.addTodoItem(value);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Введите задачу"
        name="title"
        onChange={handleChange}
      />
      <button className="form__button" type="submit"></button>
    </form>
  );
}
