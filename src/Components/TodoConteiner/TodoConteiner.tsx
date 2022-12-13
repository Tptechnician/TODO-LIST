import React from 'react';

import './TodoConteiner.scss';
import TodoItem from '../TodoItem/TodoItem';
import todo from '../../Store/TodoStore';
import { TodoConteinerProps } from '../../interfaces/interfaces';
import { observer } from 'mobx-react-lite';
import UserStore from '../../Store/UserStore';

const TodoConteiner = observer(({ onTogglePopup, setLoggedin, history }: TodoConteinerProps) => {
  function filter(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;

    if (value === 'all') {
      todo.filterTodo('all', UserStore.userStore);
    }
    if (value === 'done') {
      todo.filterTodo('done', UserStore.userStore);
    }
    if (value === 'undone') {
      todo.filterTodo('undone', UserStore.userStore);
    }
  }

  function loginOut() {
    UserStore.loginOut(setLoggedin, history);
  }

  return (
    <main className="todo">
      <div className="todo__wraper">
        <button className="todo__add-button" type="button" onClick={onTogglePopup}>
          Добавить задачу
        </button>
        <div className="todo__conteiner__filter">
          <p className="todo__conteiner__filter__title">Фильтр:</p>
          <select className="todo__conteiner__filter__select" onChange={filter}>
            <option value="all">Все</option>
            <option value="done">Выполненые</option>
            <option value="undone">Не выполненые</option>
          </select>
        </div>
      </div>
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
